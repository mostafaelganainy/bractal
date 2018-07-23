import faker from 'faker';

import GraphQlConstructs from '../GraphqlConstructs';

export default {
  name: 'Signup User',
  tests: [
    {
      name: 'Happy Path',
      steps: [
        {
          name: 'Create User',
          construct: GraphQlConstructs.CREATE_USER_MUTATION,
          variables: {
            email: faker.internet.email(),
            mobile_number: `${faker.phone.phoneNumber('(+0##) #######')}`,
          },
          postAssertions: [
            {
              assert: 'fieldsExist',
              params: [
                'create_user.token',
                'create_user.client_id',
                'create_user.expiry',
                'create_user.user.id',
                'create_user.user.first_name',
                'create_user.user.last_name',
                'create_user.user.email',
              ],
            },
          ],
        },
      ],
    },
  ],
};
