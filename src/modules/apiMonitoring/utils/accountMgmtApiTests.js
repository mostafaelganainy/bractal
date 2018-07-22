import faker from 'faker';
import GraphQlConstructs from './GraphqlConstructs';

export default {
  testSuites: [
    {
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
            },
          ],
        },
        {
          name: 'Special Case',
          steps: [
            {
              name: 'Create User',
              construct: GraphQlConstructs.CREATE_USER_MUTATION,
              variables: {
                email: faker.internet.email(),
                mobile_number: `${faker.phone.phoneNumber('(+0##) #######')}`,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Signin User',
      tests: [
        {
          name: 'Happy Path',
          steps: [
            {
              name: 'Login',
              construct: GraphQlConstructs.CREATE_USER_MUTATION,
              variables: {
                email: faker.internet.email(),
                mobile_number: `${faker.phone.phoneNumber('(+0##) #######')}`,
              },
            },
          ],
        },
      ],
    },
  ],
};
