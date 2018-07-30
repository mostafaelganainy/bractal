import createUserMutation from './constructs/accountManagement/signup/createUserMutation';
import addNewsLetterMutation from './constructs/accountManagement/misc/addNewsLetter';
import signinUserMutation from './constructs/accountManagement/signin/signinUserMutation';
import listProductsQuery from './constructs/listProductsQuery';

export default {
  ...createUserMutation,
  ...addNewsLetterMutation,
  ...signinUserMutation,
  ...listProductsQuery,
};
