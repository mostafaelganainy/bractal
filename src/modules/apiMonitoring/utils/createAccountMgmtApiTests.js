import SignupUserTestSuite from './testSuites/SignupUserTestSuite';
import SigninUserTestSuite from './testSuites/SigninUserTestSuite';
import ListProducts from './testSuites/ListProductsTestSuite';
import RegisterForNewsLetterTestSuite from './testSuites/RegisterForNewsLetterTestSuite';

export default () => ({
  testSuites: [
    SignupUserTestSuite,
    SigninUserTestSuite,
    ListProducts,
    RegisterForNewsLetterTestSuite,
  ],
});
