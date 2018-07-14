import React from 'react';
import { graphql } from 'react-relay';
import PropTypes from 'prop-types';

import RelayForm from '~/modules/coreUI/components/forms/RelayForm';

const FormMutation = graphql`
  mutation LoginFormMutation (
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
      token
    }
  }
`;


class LoginForm extends React.Component {
  submitForm = () => {
    this.form.submitForm();
  }

  render = () => {
    const {
      customLayout,
      onFormError,
      onFormSuccess,
      onFormLoading,
    } = this.props;

    return (
      <RelayForm
        onRef={(ref) => { this.form = ref; }}
        onFormError={onFormError}
        onFormSuccess={onFormSuccess}
        onFormLoading={onFormLoading}
        options={{
          customLayout,
          fields: [
            {
              name: 'email',
              placeholder: 'Email/ Mobile Number',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'password',
              placeholder: 'Password',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'remember_me',
              label: 'Remember Me',
              input_type: 'checkbox',
              type: 'Boolean',
            },
          ],
        }}
        mutation={FormMutation}
      />
    );
  }
}

LoginForm.propTypes = PropTypes.shape({
  onFormError: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func.isRequired,
  onFormLoading: PropTypes.func.isRequired,
}).isRequired;

export default LoginForm;
