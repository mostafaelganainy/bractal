// Here!

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
  static getDerivedStateFromProps(nextProps, currentState) {
    const cond = JSON.stringify(currentState.prevOptions) !== JSON.stringify(nextProps.options);
    if (cond) {
      return {
        prevOptions: nextProps.options,
        options: getTcombOptionsFromRawOptions(nextProps.options),
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: {},
      isLoading: false,
      localValidationErrors: {},
      options: {},
    };
  }

  componentDidMount = () => {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  };

  onChange = (value, path) => {
    // reset this field's error state
    this.updateLocalValidationErrors({
      ...this.state.localValidationErrors,
      [this.getFieldName(path)]: null,
    });
    this.Form.getComponent(path).validate();
    const options = t.update(this.state.options, {});
    this.setState({ options, value });
  };
  onLoading = (isLoading) => {
    this.setState({ isLoading });

    const { onFormLoading } = this.props;
    onFormLoading(isLoading);
  };

  onSubmit = (evt) => {
    evt.preventDefault();
  };

  getFieldName = path => path[0];
  getValue = () => this.Form.getValue();

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    if (value) {
      // value here is an instance of Person
      console.log(value);
    }
  };

  updateLocalValidationErrors = (errors) => {
    this.setState({ localValidationErrors: errors });
  };

  updatetCompOptionsWithErrors(errors) {
    const { options } = this.props;
    const fields = {};
    options.fields.forEach((option) => {
      if (errors[option.name]) {
        fields[option.name] = {
          hasError: {
            $set: true,
          },
          error: {
            $set: `${errors[option.name]}`,
          },
        };
      }
    });
    const updatedOptions = t.update(this.state.options, { fields });
    this.setState({ options: updatedOptions });
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

    commitMutation(environment, {
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
          this.updatetCompOptionsWithErrors(serverErrors);
        }
        // form to render to show server errors (When no local errors are there)
        resultCallback(response, serverErrors);
      },
      onError: (err) => {
        this.onLoading(false);
        resultCallback(null, err.message || err.toString());
      },
    });
  };

  submitForm = () => {
    const {
      onFormError, onFormSuccess, mutationRoot, environment, mutation,
    } = this.props;

    if (this.state.isLoading) {
      return;
    }

    this.commitFormMutation(environment, mutation, mutationRoot, (response, errors) => {
      if (onFormError) {
        if (response && errors.global) {
          onFormError(errors.global);
        } else if (typeof errors === 'string') {
          onFormError(errors);
        } else {
          onFormError(null);
        }
      }

      const errorsExist = errors && (Object.keys(errors).length > 0 || errors.length > 0);

      if (onFormSuccess && !errorsExist) {
        onFormSuccess(response);
      }
    });
  };

  render = () => {
    const { options } = this.props;

    const { localValidationErrors, isLoading } = this.state;

    const type = getTcombTypesFromRawOptions(options);

    return (
      <form onSubmit={this.onSubmit}>
        <Form
          ref={(ref) => {
            this.Form = ref;
          }}
          type={type}
          options={this.state.options}
          value={this.state.value}
          onChange={this.onChange}
          context={{
            customInputsContainer: options.customInputsContainer, // Options are not being passed
            // to Form Layout, so that we put it in context
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
      </form>
    );
  };
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
