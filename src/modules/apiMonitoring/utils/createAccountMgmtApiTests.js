import SignupUserTestSuite from './testSuites/SignupUserTestSuite';
import SigninUserTestSuite from './testSuites/SigninUserTestSuite';

export default () => ({
  testSuites: [
    SignupUserTestSuite,
    SigninUserTestSuite,
  ],
});
