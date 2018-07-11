import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PanelTitle, PanelSubtitle, PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { Column, CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { Row, CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, LargeSpacer, MediumSpacer, XXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const Panel = styled(Column)`
  width: 300px;
`;

// eslint-disable-next-line react/prop-types
const defaultPanelContentContainer = ({ children }) =>
  <CenterAlignedColumn style={{ width: '100%' }}>{ children }</CenterAlignedColumn>;

const LoginFormPanel = ({ panelContentContainer }) => {
  const ContentContainer = panelContentContainer || defaultPanelContentContainer;

  return (
    <Panel topAligned topJustified>
      <CenterAlignedColumn>
        <PanelTitle uppercase>
          LOGIN
        </PanelTitle>
        <SmallSpacer />
        <PanelSubtitle>
          Login to your account
        </PanelSubtitle>
      </CenterAlignedColumn>
      <Column fullWidth alignCenter centerJustified grow>
        <ContentContainer>
          <RelayForm
            options={[
              {
                name: 'username',
                placeholder: 'Email/ Mobile Number',
                input_type: 'textbox',
                tcomb_type: 'String',
              },
              {
                name: 'password',
                placeholder: 'Password',
                input_type: 'textbox',
                tcomb_type: 'String',
              },
            ]}
          />
          <XXXLargeSpacer />
          <Row spaceBetween centerAlign fullWidth>
            <PanelContentLabel>
              Remember Me
            </PanelContentLabel>
            <PanelContentLabel>
              <ModalLink to="/accountManagement/recoverPassword">
                Lost Your Password
              </ModalLink>
            </PanelContentLabel>
          </Row>
          <LargeSpacer />
          <BasicButton secondary>
            Login
          </BasicButton>
          <MediumSpacer />
          <PanelContentMinorLabel>
            <CenterAlignedRow>
              Forgot your password ?
              <SmallSpacer />
              <ModalLink to="/accountManagement/recoverPassword">
                Recover
              </ModalLink>
            </CenterAlignedRow>
          </PanelContentMinorLabel>
        </ContentContainer>
      </Column>
    </Panel>
  );
};

LoginFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
}).isRequired;

export default LoginFormPanel;
