
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
    isLoading: false,
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
    // reset this field's error state
    this.updateLocalValidationErrors({
      ...this.state.localValidationErrors,
      [this.getFieldName(path)]: null,
    });
    this.Form.getComponent(path).validate();
  }

  getValue = () => this.Form.getValue();
  getFieldName = path => path[0];

  initializeOptions = () => {
    const { options } = this.props;
    this.tcombOptions = getTcombOptionsFromRawOptions(options);
    this.tcombTypes = getTcombTypesFromRawOptions(options);
  }

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    console.log(value);
  }

  updateLocalValidationErrors = (errors) => {
    this.setState({ localValidationErrors: errors });
  }

  commitFormMutation = (environment, mutation, mutationRoot, resultCallback) => {
    // Apply local validations first
    const localErrors = this.Form.validate();
    const value = this.Form.getValue();

    this.updateLocalValidationErrors({});
    if (!value) {
      const errors = (localErrors && localErrors.errors) || [];
      const localValidationErrors = {};

      errors.forEach((error) => {
        if (error.path && error.path.length > 0) {
          localValidationErrors[error.path[0]] = error.message;
        } else {
          localValidationErrors.global = error.message;
        }
      });

      this.updateLocalValidationErrors(localValidationErrors);

      return;
    }

    this.onLoading(true);

    const addiontalMutationVariables = this.props.addiontalMutationVariables || {};

    commitMutation(
      environment,
      {
        mutation,
        variables: {
          ...value,
          ...addiontalMutationVariables,
        },
        onCompleted: (response, errors) => {
          this.onLoading(false);
          const serverErrors = {};
          const globalError = errors && errors.length > 0 && errors[0];

          if (globalError) {
            serverErrors.global = globalError.message;
          }
          if (response && response[mutationRoot] && response[mutationRoot].errors) {
            response[mutationRoot].errors.forEach((error) => {
              let workAROUND = error.field;
              // TODO : Till the return from the backend isn't 'email' any more
              serverErrors[workAROUND] = `${error.messages[0]}`;
              if (workAROUND === 'email') {
                workAROUND = 'user_signin';
                serverErrors[workAROUND] = `${error.messages[0]}`;
              }
              if (workAROUND === 'token') {
                workAROUND = 'code';
                serverErrors[workAROUND] = `${error.messages[0]}`;
              }
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

    if (this.state.isLoading) {
      return;
    }

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

        const errorsExist = errors && (Object.keys(errors).length > 0 || errors.length > 0);

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

    const {
      serverErrors,
      localValidationErrors,
      isLoading,
    } = this.state;

    if (options && (!this.tcombOptions || !this.tcombTypes)) {
      this.initializeOptions();
    }

    this.initializeOptions(); // TODO : Workaround to force
    // form to render to show server errors (When no local errors are there)

    return (
      <React.Fragment>
        <Form
          tabIndex="0"
          ref={(ref) => { this.Form = ref; }}
          options={this.tcombOptions}
          type={this.tcombTypes}
          value={this.state.value}
          onChange={this.onChange}
          context={{
            customInputsContainer: options.customInputsContainer, // Options are not being passed
            // to Form Layout, so that we put it in context
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
      displayName: PropTypes.string,
      customInputsContainer: PropTypes.element,
      customLayout: PropTypes.func,
    })),
  }).isRequired,
  onFormError: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func.isRequired,
  onFormLoading: PropTypes.func.isRequired,
  addiontalMutationVariables: PropTypes.shape({}),
  onChange: PropTypes.func,
}).isRequired;

export default withRelayEnvironment(RelayForm);
