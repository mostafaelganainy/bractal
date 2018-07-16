
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Image, Dropdown } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
// import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { navigateToModal } from '~/modules/core/utils/modalHelpers';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';


// import userAuthurization from '../../../../accountManagement/utilities/AccountManagement';

const DropdownContentItems = styled(Dropdown)`
  &.dropdown>.menu {
    left: auto;
    right: -145px;
    width:317px;
    padding: 0 25px 12px;
    >.item{
      padding: 12px 0 !important;
      border-bottom: 1px solid rgba(235, 235, 235,0.6);
      color:rgba(0, 0, 0, 0.5);
      &:hover{
        background: transparent
      }
      &:last-child{
        border-bottom: none;
      }
    }
  }
`;

const NavUserProfile = (props) => {
  const logout = (e, invalidateUser) => {
    e.stopPropagation();
    invalidateUser();
  };
  // const Token = userAuthurization();
  let userImage = '';
  // eslint-disable-next-line
  if (props.authenticated) {
    userImage = <Image src="/images/Header/userloggedIn.png" />;
  } else {
    userImage = (
      <IconOnlyButton primary iconName="icon-user" size={28} />
    );
  }
  const AccountItems = [
    {
      name: 'My profile',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'My orders',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'Shopping cart',
      icon: 'icon-heart',
      guestView: true,
    },
    {
      name: 'Recent viewed',
      icon: 'icon-heart',
      guestView: true,
    },
    {
      name: 'Notifications and messages',
      icon: 'icon-bell',
      guestView: false,
    },
    {
      name: 'Smart cart',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'Wishlist',
      icon: 'icon-heart-1',
      guestView: true,
    },
    {
      name: 'Following',
      icon: 'icon-heart',
      guestView: true,
    },
    {
      name: 'My points and loyalty program',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'My coupons and promo codes',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'Settings',
      icon: 'icon-heart',
      guestView: true,
    },
    {
      name: 'Invite friends',
      icon: 'icon-heart',
      guestView: false,
    },
    {
      name: 'Customer service',
      icon: 'icon-heart',
      guestView: true,
    },
  ];
  return (
    <div className="user-profile">
      <DropdownContentItems
        trigger={userImage}
        pointing
        className="set-currency"
        icon={null}
      >
        <Dropdown.Menu>
          <Dropdown.Item>
            <LargeSpacer />
            {props.authenticated ?
              (props.userInfo.firstName)
              :
              (
                <BasicButton
                  primary
                  inverted
                  fontSize="14"
                  radius="25"
                  width="55%"
                  padding="7"
                  onClick={() => navigateToModal(props.location, props.history, '/accountManagement/login')}
                >
                  Log in / Sign up
                </BasicButton>
              )
          }
            <LargeSpacer />
          </Dropdown.Item>
          {
            AccountItems.map((item) => {
              if (item.guestView || props.authenticated) {
                  return (
                    <Dropdown.Item>
                      <CenterAlignedRow>
                        <i className={item.icon} />
                        <LargeSpacer size={8} />
                        {item.name}
                      </CenterAlignedRow>
                    </Dropdown.Item>
                  );
               }
               return '';
            })
          }
          {props.authenticated ?
            (
              <Dropdown.Item>
                <BasicButton
                  primary
                  inverted
                  fontSize="14"
                  radius="25"
                  width="55%"
                  padding="7"
                  onClick={e => logout(e, props.invalidateUser)}
                >
                  Log out
                </BasicButton>
              </Dropdown.Item>
            )
          :
          ''
          }
        </Dropdown.Menu>
      </DropdownContentItems>
    </div>
  );
};

NavUserProfile.propTypes = PropTypes.shape({
  location: PropTypes.string.isRequired,
}).isRequired;

export default withUserInfo(withRouter(NavUserProfile));
