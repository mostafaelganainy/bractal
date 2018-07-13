
import React, { Component } from 'react';

import t from 'tcomb-form';
import PropTypes from 'prop-types';
import {
  getTcombOptionsFromRawOptions,
  getTcombTypesFromRawOptions,
} from '~/modules/coreUI/components/forms/TcombHelpers';

import LoginUserMutation from './LoginUserMutation';

const { Form } = { Form: t.form.Form };

export default class RelayForm extends Component {
  state = {
    value: {
      email: 'Giulio',
      password: 'Canti',
    },
    serverErrors: {},
  };

  onChange = (value, path) => {
    this.setState({ value });
    this.Form.getComponent(path).validate();
  }

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    if (value) {
      console.log(value);
    }
  }

  render = () => {
    const {
      options,
      environment,
      email,
      password,
      rememberMe,
    } = this.props;

    const { serverErrors } = this.state;

    const tcombOptions = getTcombOptionsFromRawOptions(options);
    const tcombTypes = getTcombTypesFromRawOptions(options);
    return (
      <React.Fragment>
        <Form
          ref={(ref) => { this.Form = ref; }}
          options={tcombOptions}
          type={tcombTypes}
          value={this.state.value}
          onChange={this.onChange}
          context={{
            serverErrors,
          }}
        />
        <button
          onClick={() => LoginUserMutation(
            environment,
            email,
            password,
            rememberMe,
            (errors) => {
              if (errors) {
                const newErrors = {};
                errors.forEach((error) => {
                  [newErrors[error.field]] = error.messages;
                });
                this.setState({
                  serverErrors: newErrors,
                });
              } else {
                this.setState({
                  serverErrors: {},
                });
              }
            },
          )}
        >
          Go
        </button>
      </React.Fragment>
    );
  }
}

RelayForm.propTypes = PropTypes.shape({
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    input_type: PropTypes.string.isRequired,
    tcomb_type: PropTypes.string.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;
