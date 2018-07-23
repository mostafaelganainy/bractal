import createUserMutation from './constructs/createUserMutation';
import signinUserMutation from './constructs/signinUserMutation';
import listProductsQuery from './constructs/listProductsQuery';

export default {
  ...createUserMutation,
  ...signinUserMutation,
  ...listProductsQuery,
};
