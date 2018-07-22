const endPoint = 'http://ayk-test.badrit.com/graphql';

const globalAdditionalHeaders = {};

export const StepStatus = {
  IN_PROGRESS: 0,
  SUCCEEDED: 1,
  FAILED: 2,
  NORMAL: 3,
};

const execute = test => fetch(endPoint, {
  method: 'POST',
  headers: {
    ...globalAdditionalHeaders,
    ...test.additionalHeaders,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: test.construct.operation,
    variables: {
      ...test.construct.defaultVariables,
      ...test.variables,
    },
  }),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw response;
}).catch((err) => {
  throw err;
});

const recuriveFindErrors = (obj) => {
  if (typeof (obj) === 'object') {
    if (obj.errors && obj.errors.length > 0) {
      return JSON.stringify(obj.errors, null, 4);
    } else if (obj.error) {
      return JSON.stringify(obj.error, null, 4);
    }

    Object.keys(obj).forEach((field) => {
      const res = recuriveFindErrors(obj[field]);
      if (res || res !== '"null"') {
        throw (res);
      }
    });
  }
  return null;
};

export const getStepPath = (suiteName, testName, stepName) =>
  `${suiteName}->${testName}->${stepName}`;

const findErrors = (obj) => {
  try {
    recuriveFindErrors(obj);
  } catch (err) {
    return err;
  }
  return null;
};

export default (testSuites, onStatusUpdate, onTestSucceded, onTestFailed) => {
  testSuites.forEach((testSuite) => {
    const initial = new Promise(resolveInitial => resolveInitial('Started'));

    testSuite.tests.forEach((test) => {
      const callChain = test.steps.reduce(
        (prev, step) => prev.then(() => {
          const runInfo = {
            type: 'stepRunInfo',
            path: getStepPath(testSuite.name, test.name, step.name),
            testSuiteName: testSuite.name,
            testName: test.name,
            stepName: step.name,
            startTime: Date.now(),
            status: StepStatus.IN_PROGRESS,
          };

          onStatusUpdate(runInfo);

          return execute(step)
            .then((res) => {
              const error = findErrors(res);
              if (error) {
                throw error;
              }
              runInfo.result = res;
              runInfo.status = StepStatus.SUCCEEDED;
              onStatusUpdate(runInfo);
              return runInfo; // TODO : not used for now
            })
            .catch((err) => {
              runInfo.error = err;
              runInfo.status = StepStatus.FAILED;
              onStatusUpdate(runInfo);
              throw runInfo;
            });
        }),
        initial,
      );

      callChain
        .then(() => {
          onTestSucceded(test.name);
        })
        .catch((failedStepInfo) => {
          onTestFailed(failedStepInfo);
          console.log(failedStepInfo);
        });
    });
  });
};
