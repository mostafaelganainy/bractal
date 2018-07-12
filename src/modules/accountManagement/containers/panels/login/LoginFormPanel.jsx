import React from 'react';
import PropTypes from 'prop-types';

import { PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { Row, CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, LargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import Panel from '~/modules/accountManagement/components/basic/Panel';

const LoginFormPanel = ({ panelContentContainer }) => {
  const ContentContainer = panelContentContainer;

  return (
    <Panel
      title="Login"
      subTitle="Login to your account"
    >
      <ContentContainer>
        <RelayForm
          options={[
            {
              name: 'username',
              placeholder: 'Email/ Mobile Number',
              input_type: 'textbox',
              tcomb_type: 'Number',
            },
            {
              name: 'password',
              placeholder: 'Password',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
          ]}
        />
        <XXLargeSpacer />
        <Row spaceBetween centerAlign fullWidth>
          <PanelContentMinorLabel>
            Remember Me
          </PanelContentMinorLabel>
          <PanelContentMinorLabel>
            <ModalLink to="/accountManagement/recoverPassword">
              Lost Your Password
            </ModalLink>
          </PanelContentMinorLabel>
        </Row>
        <XXLargeSpacer />
        <BasicButton secondary>
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

LoginFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default LoginFormPanel;
