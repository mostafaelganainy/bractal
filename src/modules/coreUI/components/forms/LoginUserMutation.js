import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation LoginUserMutation (
    $email: String!,
    $password: String!,
    $remember_me: Boolean!
  ) {
    signin_user(
      email: $email, 
      password: $password, 
      remember_me: $remember_me
    ) {
      client_id
      errors {
        field
        messages
      }
      expiry
      token
    }
  }
`;


export default (environment, email, password, rememberMe, resultCallback) => {
  const variables = {
    email,
    password,
    remember_me: rememberMe,
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        if (response.signin_user.errors) {
          resultCallback(response.signin_user.errors);
        }
      },
      onError: err => console.error(err),
    },
  );
};
