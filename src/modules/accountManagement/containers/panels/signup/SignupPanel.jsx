import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import styled from 'styled-components';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { LargeSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';
import { mediaQueryMin } from '~/modules/core/utils/cssHelpers/cssMedia';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';
import Separator from '~/modules/coreUI/components/layouts/helpers/Separator';

import SignupForm from './SignupForm';

const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;
`;
const DesktopFormLayout = locals => (
  <CenterAlignedRow>
    <CenterAlignedColumn>
      <CenterAlignedRow>
        <CenterAlignedColumn>
          <InputLayout>
            <div>{locals.inputs.first_name}</div>
            <div>{locals.inputs.last_name}</div>
            <div>{locals.inputs.email}</div>
          </InputLayout>
        </CenterAlignedColumn>
        <LargeSpacer />
        <CenterAlignedColumn>
          <InputLayout>
            <div>{locals.inputs.nationality}</div>
            <div>{locals.inputs.mobile_number}</div>
            <div>{locals.inputs.password}</div>
          </InputLayout>
        </CenterAlignedColumn>
      </CenterAlignedRow>
      <InputLayout>
        <div>{locals.inputs.gender}</div>
      </InputLayout>
    </CenterAlignedColumn>
    <Separator
      vertical
      spacerSize="xxxxxLarge"
      separatorLength="xLarge"
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
  }

  render = () => {
    const { isLoading, panelError } = this.state;

    return (
      <React.Fragment>
        <Panel
          titleLabel="Register"
          subTitleLabel="Join our community"
          error={panelError}
          panelWidth="100%"
        >
          <Media query={mediaQueryMin('desktop')}>
            {isOnDesktop => (
              <React.Fragment>
                <SignupForm
                  ref={(ref) => { this.form = ref; }}
                  customLayout={isOnDesktop ? DesktopFormLayout : null}
                  customInputsContainer={isOnDesktop ? null : InputLayout}
                  onFormError={error => this.onError(error)}
                  onFormSuccess={response => this.onSuccess(response)}
                  onFormLoading={loading => this.setLoadingState(loading)}
                />
                {!isOnDesktop &&
                  <InputLayout>
                    <BasicButton
                      loading={isLoading}
                      secondary
                      onClick={() => this.form.submitForm()}
                    >
                      Signup
                    </BasicButton>
                  </InputLayout>
                }
              </React.Fragment>
            )}
          </Media>
        </Panel>
      </React.Fragment>
    );
  };
}

SignupPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default withRelayEnvironment(SignupPanel);
