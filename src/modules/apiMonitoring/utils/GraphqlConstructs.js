/* eslint-disable */

import faker from 'faker';

const createUserMutation = `
mutation SignupMutation (  
    $email: String!  
    $password: String!
    $first_name: String!
    $last_name: String!
    $nationality: String!
    $mobile_number: String!
    $gender: String!
) {
    create_user(
        email: $email
        password: $password
        first_name: $first_name
        last_name: $last_name
        nationality: $nationality
        mobile_number: $mobile_number
        gender: $gender
    ) {
        user {
            id
        }
        errors {
            field
            messages
        }
    }
}
`;

export default {
    CREATE_USER_MUTATION: {
        operation: createUserMutation,
        defaultVariables: {
            email: faker.internet.email(),
            password: `${faker.internet.password()}`,
            first_name: `${faker.name.firstName()}`,
            last_name: `${faker.name.lastName()}`,
            nationality: `${faker.address.country()}`,
            country_code: `${faker.address.countryCode()}`,
            mobile_number: `${faker.phone.phoneNumber('(+0##) #######')}`,
            gender: 'Male',
        },
    },
};
