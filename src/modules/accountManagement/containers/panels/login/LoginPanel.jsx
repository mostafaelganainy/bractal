import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PanelContentMinorLabel, PanelContentSmallLabel } from '~/modules/accountManagement/components/basic/Labels';
import { Row, CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { XXSmallSpacer, SmallSpacer, LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import Panel from '~/modules/accountManagement/components/basic/Panel';
import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';
import { RightAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';

import LoginForm from './LoginForm';

const InputLayout = styled.div`
  width: 100%;
`;
const CustomFormLayout = locals => (
  <InputLayout>
    <div>{locals.inputs.email}</div>
    <div>{locals.inputs.password}</div>
    <Row spaceBetween topAligned fullWidth>
      <div>{locals.inputs.remember_me}</div>
      <PanelContentSmallLabel>
        <RightAlignedColumn>
          <XXSmallSpacer />
          <ModalLink to="/accountManagement/recoverPassword">
            Lost Your Password
          </ModalLink>
        </RightAlignedColumn>
      </PanelContentSmallLabel>
    </Row>
  </InputLayout>
);

class LoginFormPanel extends React.Component {
  state = {
    panelError: null,
  };

  updatePanelError = error => this.setState({ panelError: error });

  render = () => {
    const { panelContentContainer } = this.props;
    const ContentContainer = panelContentContainer;

    return (
      <Panel
        titleLabel="Login"
        subTitleLabel="Get in, and discover your daily gift"
        error={this.state.panelError}
      >
        <ContentContainer>
          <LoginForm
            ref={(ref) => { this.form = ref; }}
            customLayout={CustomFormLayout}
            formErrorCallBack={error => this.updatePanelError(error)}
          />
          <BasicButton secondary onClick={() => this.form.submitForm()}>
            Login
          </BasicButton>
          <LargeSpacer />
          <PanelContentMinorLabel>
            <CenterAlignedRow>
              By login you agree to our
              <SmallSpacer />
              <ModalLink to="/accountManagement/recoverPassword">
                terms &amp; conditions
              </ModalLink>
            </CenterAlignedRow>
          </PanelContentMinorLabel>
        </ContentContainer>
      </Panel>
    );
  };
}

LoginFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default withRelayEnvironment(LoginFormPanel);
