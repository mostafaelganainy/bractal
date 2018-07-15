import React from 'react';
import { graphql } from 'react-relay';
import PropTypes from 'prop-types';

import RelayForm from '~/modules/coreUI/components/forms/RelayForm';

const FormMutation = graphql`
  mutation SignupFormMutation (
    $email: String!
    $password: String!
    $first_name: String!
    $last_name: String!
    $nationality: String!
    $country_code: String!
    $mobile_number: String!
    $gender: String!
  ) {
    create_user(
      email: $email
      password: $password
      first_name: $first_name
      last_name: $last_name
      nationality: $nationality
      country_code: $country_code
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


class SignupForm extends React.Component {
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
        mutationRoot="create_user"
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
              name: 'first_name',
              placeholder: 'First Name',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'last_name',
              placeholder: 'Last Name',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'nationality',
              placeholder: 'Nationality',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'country_code',
              placeholder: 'Country Code',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'mobile_number',
              placeholder: 'Mobile Number',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'gender',
              placeholder: 'Gender',
              input_type: 'textbox',
              type: 'RequiredString',
            },
            {
              name: 'register_for_news',
              label: 'Register For Newsletter',
              importantLabel: true,
              checkboxNote: '*After Registering, you will recieve an email with a verification code to verify your account.',
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

SignupForm.propTypes = PropTypes.shape({
  onFormError: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func.isRequired,
  onFormLoading: PropTypes.func.isRequired,
}).isRequired;

export default SignupForm;
