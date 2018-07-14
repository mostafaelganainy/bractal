
import React, { Component } from 'react';
import { commitMutation } from 'react-relay';

import t from 'tcomb-form';
import PropTypes from 'prop-types';
import {
  getTcombOptionsFromRawOptions,
  getTcombTypesFromRawOptions,
} from '~/modules/coreUI/components/forms/TcombHelpers';

import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';

const { Form } = { Form: t.form.Form };

class RelayForm extends Component {
  state = {
    value: {},
    serverErrors: {},
    localValidationErrors: {},
  };

  componentDidMount = () => {
    this.props.onRef(this);
  }

  onChange = (value, path) => {
    this.setState({ value });
    this.Form.getComponent(path).validate();
    console.log('hi');
  }

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    if (value) {
      console.log(value);
    }
  }

  commitFormMutation = (environment, mutation, resultCallback) => {
    // Apply local validations first
    const localErrors = this.Form.validate();
    const value = this.Form.getValue();

    if (!value) {
      const localValidationErrors = {};
      const errors = (localErrors && localErrors.errors) || [];

      errors.forEach((error) => {
        if (error.path && error.path.length > 0) {
          localValidationErrors[error.path[0]] = error.message;
        } else {
          localValidationErrors.global = error.message;
        }
      });

      this.setState({ localValidationErrors });

      return;
    }

    commitMutation(
      environment,
      {
        mutation,
        variables: {
          ...value,
        },
        onCompleted: (response, errors) => {
          const serverErrors = {
            global: null,
          };
          const globalError = errors && errors.length > 0 && errors[0];

          if (globalError) {
            serverErrors.global = globalError.message;
          }
          if (response && response.signin_user && response.signin_user.errors) {
            response.signin_user.errors.forEach((error) => {
              [serverErrors[error.field]] = error.messages;
            });
          }

          resultCallback(serverErrors);
        },
        onError: err => console.error(err),
      },
    );
  };

  submitForm = () => {
    const {
      formErrorCallBack,
      environment,
      mutation,
    } = this.props;

    this.commitFormMutation(
      environment,
      mutation,
      (errors) => {
        this.setState({
          serverErrors: errors,
        });

        formErrorCallBack(errors.global);
      },
    );
  }

  render = () => {
    const {
      options,
    } = this.props;

    const { serverErrors, localValidationErrors } = this.state;

    const tcombOptions = getTcombOptionsFromRawOptions(options);
    const tcombTypes = getTcombTypesFromRawOptions(options);
    return (
      <React.Fragment>
        <Form
          tabIndex="0"
          ref={(ref) => { this.Form = ref; }}
          options={tcombOptions}
          type={tcombTypes}
          value={this.state.value}
          onChange={this.onChange}
          context={{
            serverErrors,
            localValidationErrors,
            onKeyUp: (event) => {
              if (event.keyCode === 13) {
                this.submitForm();
              }
            },
          }}
        />
      </React.Fragment>
    );
  }
}

RelayForm.propTypes = PropTypes.shape({
  options: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      input_type: PropTypes.string.isRequired,
      tcomb_type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string,
    })),
    customLayout: PropTypes.func,
  }).isRequired,
  formErrorCallBack: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}).isRequired;

export default withRelayEnvironment(RelayForm);