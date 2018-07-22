/* eslint-disable react/no-danger, max-len */

import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import { Container } from 'semantic-ui-react';

import TestRunner, { getStepPath } from '~/modules/apiMonitoring/utils/TestRunner';
import Tests from '~/modules/apiMonitoring/utils/accountMgmtApiTests';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';

import { XXXXLargeSpacer, MediumSpacer, LargeSpacer, XLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { MediumLabel, XXLargeLabel } from '~/modules/coreUI/components/basic/Labels';
import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';

import ToggleCard from '~/modules/apiMonitoring/components/ToggleCard';

const BoxedContent = styled.div`
  border: solid 1px ${props => props.theme.borders.color.normal};
  padding: ${props => props.theme.paddings.medium}px;
`;

const SubcontentCard = styled(ToggleCard)`
  width: 100%;
`;

class HomePage extends React.Component {
  state = {
    testStuies: Tests.testSuites,
    statuses: {
      suites: {},
    },
    failed: false,
    stepsResults: {},
  }

  onStatusUpdate = (stepInfo) => {
    const suiteChildStatuses = this.state.statuses.suites[stepInfo.testSuiteName] || {};
    const testChildStatuses = suiteChildStatuses[stepInfo.testName] || {};

    const suiteStatusObj = {
      status: stepInfo.status,
      tests: {
        ...suiteChildStatuses,
        [stepInfo.testName]: {
          status: stepInfo.status,
          steps: {
            ...testChildStatuses,
            [stepInfo.stepName]: {
              status: stepInfo.status,
            },
          },
        },
      },
    };

    this.setState({
      stepsResults: {
        ...this.state.stepsResults,
        [getStepPath(stepInfo.testSuiteName, stepInfo.testName, stepInfo.stepName)]: stepInfo,
      },
      statuses: {
        ...this.state.statuses,
        [stepInfo.testSuiteName]: suiteStatusObj,
      },
    });
  }

  onTestSucceded = () => {
    this.setState({
      failed: false,
    });
  }
  onTestFailed = (error) => {
    this.setState({
      failed: true,
    });

    if (error && error.type === 'stepRunInfo') {
      this.onStatusUpdate(error);
    }
  }
  getTestSuiteStatus = testSuiteName =>
    (this.state.statuses[testSuiteName] || {}).status;

  getTestStatus = (testSuiteName, testName) =>
    ((this.state.statuses[testSuiteName]
     && this.state.statuses[testSuiteName].tests[testName]
    ) || {}).status;

  getStepStatus = (testSuiteName, testName, stepName) =>
    ((this.state.statuses[testSuiteName]
     && this.state.statuses[testSuiteName].tests[testName]
     && this.state.statuses[testSuiteName].tests[testName].steps[stepName]
    ) || {}).status;

  startTest = () => {
    TestRunner(Tests.testSuites, this.onStatusUpdate, this.onTestSucceded, this.onTestFailed);
  }

  stringJsonToFormattedHTML = (text) => {
    if (typeof (text) === 'object') {
      return JSON.stringify(text, null, 4).replace(/\n/g, '<br/>').replace(/[ ]/g, '&nbsp;');
    } else if (text) {
      return text.replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/[ ]/g, '&nbsp;');
    }

    return '';
  }

  render = () => (
    <React.Fragment>
      <Container>
        <XXXXLargeSpacer />

        <Row leftJustified>
          <XXLargeLabel color={this.state.failed ? 'red' : 'black'} >
            Test Suites
          </XXLargeLabel>
          <LargeSpacer />
          <BasicButton width="100px" primary onClick={() => this.startTest()}>
            RUN
          </BasicButton>
        </Row>

        <XLargeSpacer />

        {this.state.testStuies.map((testSuite) => {
          const suiteCardStatus = this.getTestSuiteStatus(testSuite.name);

          return (
            <React.Fragment>
              <MediumSpacer />
              <ToggleCard
                key={testSuite.name}
                title={testSuite.name}
                titleSize="large"
                mode={suiteCardStatus}
              >
                <React.Fragment>
                  <MediumLabel color="important">
                    <b>Tests :</b>
                  </MediumLabel>
                  { testSuite.tests.map((test) => {
                      const testCardStatus = this.getTestStatus(testSuite.name, test.name);
                      return (
                        <React.Fragment>
                          <MediumSpacer />
                          <Row fullWidth stretchJustified>
                            <MediumSpacer />
                            <ToggleCard key={test.name} title={test.name} mode={testCardStatus}>
                              { test.steps.map((step) => {
                                const stepStatus =
                                  this.getStepStatus(testSuite.name, test.name, step.name);
                                const stepInfo = this.state.stepsResults[
                                  getStepPath(testSuite.name, test.name, step.name)];

                                const error = stepInfo
                                  && stepInfo.error
                                  && this.stringJsonToFormattedHTML(stepInfo.error);

                                const result = stepInfo
                                  && stepInfo.result
                                  && this.stringJsonToFormattedHTML(stepInfo.result);

                                return (
                                  <React.Fragment>
                                    <MediumLabel color="important">
                                      <b>Steps :</b>
                                    </MediumLabel>
                                    <MediumSpacer />
                                    <Row fullWidth stretchJustified>
                                      <MediumSpacer />
                                      <ToggleCard
                                        key={step.name}
                                        title={step.name}
                                        mode={stepStatus}
                                      >
                                        <Row topAligned fullWidth stretchJustified>
                                          <Column leftAligned fullWidth>
                                            {result && (
                                              <SubcontentCard
                                                showBorder={false}
                                                title="Response :"
                                              >
                                                <BoxedContent dangerouslySetInnerHTML={{ __html: result }} />
                                              </SubcontentCard>
                                            )}
                                            {error && (
                                              <SubcontentCard
                                                showBorder={false}
                                                title="Error :"
                                              >
                                                <BoxedContent dangerouslySetInnerHTML={{ __html: error }} />
                                              </SubcontentCard>
                                            )}
                                          </Column>
                                          <Column leftAligned fullWidth>
                                            {step.construct.operation && (
                                              <SubcontentCard
                                                showBorder={false}
                                                title="Operation :"
                                              >
                                                <BoxedContent dangerouslySetInnerHTML={{ __html: this.stringJsonToFormattedHTML(step.construct.operation) }} />
                                              </SubcontentCard>
                                            )}
                                            {step.construct.defaultVariables && (
                                              <SubcontentCard
                                                showBorder={false}
                                                title="Default Variables : "
                                              >
                                                <BoxedContent dangerouslySetInnerHTML={{ __html: this.stringJsonToFormattedHTML(step.construct.defaultVariables) }} />
                                              </SubcontentCard>
                                            )}
                                            {step.variables && (
                                              <SubcontentCard
                                                showBorder={false}
                                                title="Variables : "
                                              >
                                                <BoxedContent dangerouslySetInnerHTML={{ __html: this.stringJsonToFormattedHTML(step.variables) }} />
                                              </SubcontentCard>
                                            )}
                                          </Column>
                                        </Row>
                                      </ToggleCard>
                                    </Row>
                                  </React.Fragment>
                                );
                              })}
                            </ToggleCard>
                          </Row>
                        </React.Fragment>
                      );
                    })}
                </React.Fragment>
              </ToggleCard>
            </React.Fragment>
          );
        })}
        <XXXXLargeSpacer />
      </Container>
    </React.Fragment>
  );
}

export default translate('apiMonitoring')(HomePage);
