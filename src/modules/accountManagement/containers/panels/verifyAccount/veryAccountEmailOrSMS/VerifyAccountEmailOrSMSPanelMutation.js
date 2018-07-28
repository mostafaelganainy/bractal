import { graphql } from 'react-relay';

export default graphql`
  mutation VerifyAccountEmailOrSMSPanelMutation (
    $email: String!,
  ) {
    forgot_password_send_code(
      email: $email,
    ) {      
      errors {
        field
        messages
      }
      message
    }
  }
`;

