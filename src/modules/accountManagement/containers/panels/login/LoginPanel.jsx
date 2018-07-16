import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { PanelContentMinorLabel, PanelContentSmallLabel } from '~/modules/accountManagement/components/basic/Labels';
import { Row, CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import Panel from '~/modules/accountManagement/components/basic/Panel';
import withRelayEnvironment from '~/modules/core/utils/relayHelpers/withRelayEnvironment';
import { RightAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';
import { navigateToModal } from '~/modules/core/utils/modalHelpers';

import LoginForm from './LoginForm';
import InputSelect from '../signup/InputSelect';
import AllCountries from '../../../containers/AllCountries.json';

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
    isLoading: false,
    isMounted: false,
    showInput: false,
    hasFlag: true,
    CountriesData: [],
    DropdownIsShown: false,
  };
  componentWillMount() {
    this.setState({ CountriesData: AllCountries });
  }

  componentDidMount = () => {
    // Workaround for an issue happening when the onSuccess got called after the form got unmounted
    this.setState({
      isMounted: true,
    });
  }

  componentWillUnmount = () => {
    // Workaround for an issue happening when the onSuccess got called after the form got unmounted
    this.setState({
      isMounted: false,
    });
  }

  onSuccess = (response) => {
    const { history, location, updateUserInfo } = this.props;

    if (!this.state.isMounted || !this.form) {
      return;
    }

    updateUserInfo({
      token: response.signin_user.token,
      clientID: response.signin_user.client_id,
      expiry: response.signin_user.expiry,
      email: response.signin_user.user.email,
      firstName: response.signin_user.user.first_name,
      lastName: response.signin_user.user.last_name,
      rememberMe: this.form.getValue().remember_me,
    });

    navigateToModal(location, history, '/accountManagement/loginResult');
  }

  onError = (error) => {
    const { invalidateUser } = this.props;

    if (!this.state.isMounted && this.form) {
      return;
    }

    this.setState({ panelError: error });

    if (error) {
      invalidateUser();
    }
  }

  setLoadingState = (isLoading) => {
    this.setState({ isLoading });
  }

  showDropdown =() => {
    this.setState({ DropdownIsShown: !this.state.DropdownIsShown });
  };
  GetSelectedOpt =() => {
    // alert("vv");
  };
  render = () => {
    const { panelContentContainer, userInfo } = this.props;
    const { isLoading, panelError } = this.state;
    const ContentContainer = panelContentContainer;

    return (
      <Panel
        titleLabel="Login"
        subTitleLabel="Get in, and discover your daily gift"
        error={panelError}
      >
        <ContentContainer>
          <LoginForm
            ref={(ref) => { this.form = ref; }}
            customLayout={CustomFormLayout}
            onFormError={error => this.onError(error, userInfo)}
            onFormSuccess={response => this.onSuccess(response, userInfo)}
            onFormLoading={loading => this.setLoadingState(loading)}
          />
          <BasicButton secondary loading={isLoading} onClick={() => this.form.submitForm()}>
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
          <InputSelect
            showInput={!this.state.showInput}
            GetSelectedOpt={this.GetSelectedOpt}
            showDropdown={this.showDropdown}
            CountriesData={this.state.CountriesData}
            hasFlag={!this.state.hasFlag}
            DropdownIsShown={this.state.DropdownIsShown}
            width="40%"
          />
        </ContentContainer>
      </Panel>
    );
  };
}

LoginFormPanel.propTypes = PropTypes.shape({
  panelContentContainer: PropTypes.element,
  userInfo: PropTypes.shape({}),
}).isRequired;

export default withRelayEnvironment(withUserInfo(withRouter(LoginFormPanel)));
