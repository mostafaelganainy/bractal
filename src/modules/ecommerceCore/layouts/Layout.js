import React from 'react';
import { ThemeProvider } from 'styled-components';
import { translate } from 'react-i18next';
import Media from 'react-media';
import { Sidebar } from 'semantic-ui-react';
import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import EcommerceMainContainer from '~/modules/ecommerceCore/components/EcommerceMainContainer';
import AccountManagementModals from '~/modules/accountManagement/containers/AccountManagementModals';
import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import UserInfoProvider from '~/modules/core/utils/accessManagementHelpers/UserInfoProvider';
import SideMenu from '~/modules/ecommerceCoreUI/components/header/SideMenu';
import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
import Theme from '../Theme';

const Layout = () => {
  let visiblty = false;
  const toggleVisiblity = () => {
    visiblty = !visiblty;
  };
  return (
    <ThemeProvider theme={Theme}>
      <EcommerceMainContainer>
        <UserInfoProvider>
          <Sidebar.Pushable>
            <Media
              query={mediaQueryMax('tablet')}
              render={() => (
                <SideMenu visible={visiblty} />
              )}
            />
            <Sidebar.Pusher>
              <Header visible={toggleVisiblity} />
              <PageContent />
              <Footer />
              <ModalRoute path="/accountManagement/" component={AccountManagementModals} />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </UserInfoProvider>
      </EcommerceMainContainer>
    </ThemeProvider>
  );
};
/* eslint-disable indent, function-paren-newline */
export default
  translate('eCommerceCore')(
    translate('eCommerceCoreUI')(
      Layout,
    ),
  );
