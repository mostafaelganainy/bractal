import React, { Component } from 'react';
import { commitMutation } from 'react-relay';

import t from 'tcomb-form';
import PropTypes from 'prop-types';

import cuid from 'cuid';

import assert from '~/modules/core/utils/jsHelpers/assert';
import objectsDeepNotEqualComparison from '~/modules/core/utils/jsHelpers/objectsDeepComparison';

import {
  getTcombOptionsFromRawOptions,
  getTcombTypesFromRawOptions,
} from '~/modules/coreUI/components/forms/TcombHelpers';

import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';

const { Form } = { Form: t.form.Form };

class SeededTcombForm extends Form {
  // Without this, all forms' input fields will have
  // similar generated ids, and browswer will complaint
  getSeed = () => cuid();
}
class RelayForm extends Component {
  static getDerivedStateFromProps(nextProps, currentState) {
    const cond = objectsDeepNotEqualComparison(currentState.prevOptions, nextProps.options);

    if (cond) {
      return {
        prevOptions: nextProps.options,
        tcombOptions: getTcombOptionsFromRawOptions(nextProps.options),
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: {},
      isLoading: false,
      tcombOptions: {},
    };
  }

  componentDidMount = () => {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  };

  onChange = (value, path) => {
    // reset this field's error state
    if (this.Form) {
      this.Form.getComponent(path).validate();
    }
    const { tcombOptions } = this.state;
    this.setState({ tcombOptions, value });
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

  updateTcompOptionsWithErrors(fieldsErrors) {
    const { options } = this.props;
    const fields = {};

    options.fields.forEach((option) => {
      if (fieldsErrors[option.name]) {
        fields[option.name] = {
          hasError: {
            $set: true,
          },
          error: {
            $set: `${fieldsErrors[option.name]}`,
          },
        };
      }
    });

    const updatedOptions = t.update(this.state.tcombOptions, { fields });
    this.setState({ tcombOptions: updatedOptions });
  }

  commitFormMutation = (environment, mutation, mutationRoot, resultCallback) => {
    // Apply local validations first
    this.Form.validate();

    const formValues = this.Form.getValue();

    if (!formValues) {
      return;
    }

    this.onLoading(true);

    const addiontalMutationVariables = this.props.addiontalMutationVariables || {};

    commitMutation(environment, {
      mutation,
      variables: {
        ...formValues,
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
          this.updateTcompOptionsWithErrors(serverErrors);
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
      // onFormError & onFormSuccess shouldn't be empty or undefined
      assert(onFormError, 'onFormError Should Not Be Undefined');
      assert(onFormSuccess, 'onFormSuccess Should Not Be Undefined');

      if (response && errors.global) {
        onFormError(errors.global);
      } else if (typeof errors === 'string') {
        onFormError(errors);
      } else {
        onFormError(null);
      }

      const errorsExist = errors && (Object.keys(errors).length > 0 || errors.length > 0);

      if (!errorsExist) {
        onFormSuccess(response);
      }
    });
  };

  render = () => {
    const { options } = this.props;

    const { isLoading } = this.state;

    const type = getTcombTypesFromRawOptions(options);

    // FIXME: Nested values needs different handling
    const formValues = {
      ...options.initialFormValue,
      ...this.state.value,
    };

    return (
      <form
        // External form helps with Autocomplete
        onSubmit={this.onSubmit}
      >
        <SeededTcombForm
          ref={(ref) => {
            console.log('Welcome to our great world!');
            this.Form = ref;
          }}
          type={type}
          options={this.state.tcombOptions}
          value={formValues}
          onChange={(value, path) => this.onChange(value, path)}
          context={{
            customInputsContainer: options.customInputsContainer, // Options are not being passed
            // to Form Layout, so that we put it in context
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
    initialFormValue: PropTypes.shape({}),
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
