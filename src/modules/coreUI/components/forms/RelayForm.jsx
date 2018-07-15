
import React, { Component } from 'react';
import { commitMutation } from 'react-relay';
import changeCase from 'change-case';


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
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  onLoading = (isLoading) => {
    this.setState({ isLoading });

    const { onFormLoading } = this.props;
    onFormLoading(isLoading);
  }

  onChange = (value, path) => {
    this.setState({ value });
    this.Form.getComponent(path).validate();
  }

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    console.log(value);
  }

  commitFormMutation = (environment, mutation, mutationRoot, resultCallback) => {
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

    this.onLoading(true);

    commitMutation(
      environment,
      {
        mutation,
        variables: {
          ...value,
        },
        onCompleted: (response, errors) => {
          this.onLoading(false);
          const serverErrors = {
            global: null,
          };
          const globalError = errors && errors.length > 0 && errors[0];

          if (globalError) {
            serverErrors.global = globalError.message;
          }
          if (response && response[mutationRoot] && response[mutationRoot].errors) {
            response[mutationRoot].errors.forEach((error) => {
              serverErrors[error.field] = `${changeCase.sentenceCase(error.field)} ${error.messages[0]}`;
            });
          }

          resultCallback(response, serverErrors);
        },
        onError: (err) => {
          this.onLoading(false);
          resultCallback(null, err.message || err.toString());
        },
      },
    );
  };

  submitForm = () => {
    const {
      onFormError,
      onFormSuccess,
      mutationRoot,
      environment,
      mutation,
    } = this.props;

    this.commitFormMutation(
      environment,
      mutation,
      mutationRoot,
      (response, errors) => {
        this.setState({
          serverErrors: errors,
        });

        if (onFormError) {
          if (response && errors.global) {
            onFormError(errors.global);
          } else if (typeof (errors) === 'string') {
            onFormError(errors);
          } else {
            onFormError(null);
          }
        }

        const errorsExist = errors && errors.length > 0;

        if (onFormSuccess && !errorsExist) {
          onFormSuccess(response);
        }
      },
    );
  }

  render = () => {
    const {
      options,
    } = this.props;

    const { serverErrors, localValidationErrors, isLoading } = this.state;

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
            isLoading,
            onSubmit: this.submitForm,
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
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string,
    })),
    customLayout: PropTypes.func,
  }).isRequired,
  onFormError: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func.isRequired,
  onFormLoading: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}).isRequired;

export default withRelayEnvironment(RelayForm);
