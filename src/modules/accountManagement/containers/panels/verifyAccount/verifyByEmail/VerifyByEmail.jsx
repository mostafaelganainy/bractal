import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { LargeSpacer, XLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans } from 'react-i18next';
import Image from '~/modules/coreUI/components/basic/Image';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';
import { navigateToModal } from '~/modules/core/utils/modalHelpers';

import VerifyByEmailForm from './VerifyByEmailForm';

const IMAGE_PATH = '/images/AccountManagement';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;
`;

class VerficationCodeEmail extends React.Component {
  state = {
    panelError: null,
    isLoading: false,
  };

  onSuccess = (response) => {
    const { history, location, updateUserInfo } = this.props;

    if (!this.form || !response || !response.confirm_email) {
      return;
    }

    updateUserInfo({
      token: response.confirm_email.token,
      clientID: response.confirm_email.client_id,
      expiry: response.confirm_email.expiry,
      email: response.confirm_email.user.email,
      firstName: response.confirm_email.user.first_name,
      lastName: response.confirm_email.user.last_name,
      rememberMe: true,
    });

    navigateToModal(location, history, '/accountManagement/showSuccess');
  }

  onError = error => this.setState({ panelError: error });

  setLoadingState = (isLoading) => {
    this.setState({ isLoading });
  }

  render = () => {
    const { isLoading, panelError } = this.state;

    return (
      <Panel
        titleLabel="VERIFY YOUR ACCOUNT"
        subTitleLabel="Necessary Step to active your account"
        error={panelError}
        panelWidth="100%"
      >
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/SMSImages.png`}
          srcset={`${IMAGE_PATH}/SMSImages.png 2x,
          ${IMAGE_PATH}/SMSImages.png 3x`}
        />
        <LargeSpacer />
        <XLargeSpacer />
        <CenteredParagraphPanelContent>
          <Trans i18nKey="verifyAccount.EmailTxt" />
        </CenteredParagraphPanelContent>
        <XLargeSpacer />
        <InputLayout>
          <VerifyByEmailForm
            ref={(ref) => { this.form = ref; }}
            onFormError={error => this.onError(error)}
            onFormSuccess={response => this.onSuccess(response)}
            onFormLoading={loading => this.setLoadingState(loading)}
          />
          <BasicButton
            loading={isLoading}
            disabled={isLoading}
            onClicked={() => this.form.submitForm()}
          >
            <Trans i18nKey="verifyAccount.ButtonCreateAccount" />
          </BasicButton>
        </InputLayout>
      </Panel>
    );
  }
}

VerficationCodeEmail.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  updateUserInfo: PropTypes.shape({}).isRequired,
};

export default withUserInfo(VerficationCodeEmail);
