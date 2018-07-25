import SignupUserTestSuite from './testSuites/SignupUserTestSuite';
import SigninUserTestSuite from './testSuites/SigninUserTestSuite';
import ListProducts from './testSuites/ListProductsTestSuite';

export default () => ({
  testSuites: [
    SignupUserTestSuite,
    SigninUserTestSuite,
    ListProducts,
  ],
});
