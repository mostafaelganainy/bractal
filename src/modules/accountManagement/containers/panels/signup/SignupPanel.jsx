import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { LargeSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';
import VerticalSeparator from '~/modules/coreUI/components/layouts/helpers/VerticalSeparator';

import SignupForm from './SignupForm';


const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;
`;
const CustomFormLayout = locals => (
  <CenterAlignedRow>
    <CenterAlignedColumn>
      <InputLayout>
        <div>{locals.inputs.email}</div>
        <div>{locals.inputs.first_name}</div>
        <div>{locals.inputs.last_name}</div>
        <div>{locals.inputs.mobile_number}</div>
      </InputLayout>
    </CenterAlignedColumn>
    <LargeSpacer />
    <CenterAlignedColumn>
      <InputLayout>
        <div>{locals.inputs.nationality}</div>
        <div>{locals.inputs.gender}</div>
        <div>{locals.inputs.password}</div>
      </InputLayout>
    </CenterAlignedColumn>
    <VerticalSeparator
      spacerWidth="xxxxxLarge"
      separatorLength="large"
      separatorColorTone="normal"
    />
    <InputLayout>
      <div>{locals.inputs.register_for_news}</div>
      <BasicButton
        loading={locals.context.isLoading}
        secondary
        onClick={() => locals.context.onSubmit()}
      >
        Signup
      </BasicButton>
      <XXXXXLargeSpacer />
    </InputLayout>
  </CenterAlignedRow>
);

class SignupPanel extends React.Component {
  state = {
    panelError: null,
    isLoading: false,
  };

  onSuccess = (response) => {
    console.log(response);
  }

  onError = error => this.setState({ panelError: error });

  setLoadingState = (isLoading) => {
    this.setState({ isLoading });
    console.log(`Hiiiiiii ${isLoading}`);
  }

  render = () => {
    const { isLoading, panelError } = this.state;

    console.log(isLoading);

    return (
      <React.Fragment>
        <Panel
          titleLabel="Register"
          subTitleLabel="Join our community"
          error={panelError}
          panelWidth="100%"
        >
          <CenterAlignedRow>
            <SignupForm
              ref={(ref) => { this.form = ref; }}
              customLayout={CustomFormLayout}
              onFormError={error => this.onError(error)}
              onFormSuccess={response => this.onSuccess(response)}
              onFormLoading={loading => this.setLoadingState(loading)}
            />
          </CenterAlignedRow>
        </Panel>
      </React.Fragment>
    );
  };
}

SignupPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default withRelayEnvironment(SignupPanel);
