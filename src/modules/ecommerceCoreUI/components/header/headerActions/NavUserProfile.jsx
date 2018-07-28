
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { navigateToModal } from '~/modules/core/utils/modalHelpers';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';

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
const UserloggedinContent = styled.div`
  font-size: 16px;
  color: #000;
  text-transform: capitalize;
  i {
    font-size:30px;
    color:#B2B2B2;
  }
`;

const NavUserProfile = (props) => {
  const logout = (e, invalidateUser) => {
    e.stopPropagation();
    invalidateUser();
  };
  let userImage = '';
  // eslint-disable-next-line
  if (props.authenticated) {
    userImage = <IconOnlyButton primary iconName="icon-userloggedin" size={28} />;
  } else {
    userImage = (
      <IconOnlyButton primary iconName="icon-user" size={28} />
    );
  }
  const AccountItems = [
    {
      name: 'My profile',
      icon: 'icon-profile',
      guestView: false,
    },
    {
      name: 'My orders',
      icon: 'icon-list',
      guestView: false,
    },
    {
      name: 'Shopping cart',
      icon: 'icon-shop',
      guestView: true,
    },
    {
      name: 'Recent viewed',
      icon: 'icon-view',
      guestView: true,
    },
    {
      name: 'Notifications and messages',
      icon: 'icon-bell',
      guestView: false,
    },
    {
      name: 'Smart cart',
      icon: 'icon-smart-cart',
      guestView: false,
    },
    {
      name: 'Wishlist',
      icon: 'icon-heart-1',
      guestView: true,
    },
    {
      name: 'Following',
      icon: 'icon-follow-shop',
      guestView: true,
    },
    {
      name: 'My points and loyalty program',
      icon: 'icon-loyalty',
      guestView: false,
    },
    {
      name: 'My coupons and promo codes',
      icon: 'icon-promo',
      guestView: false,
    },
    {
      name: 'Settings',
      icon: 'icon-setting',
      guestView: true,
    },
    {
      name: 'Invite friends',
      icon: 'icon-invite',
      guestView: false,
    },
    {
      name: 'Customer service',
      icon: 'icon-customer',
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
              (
                <UserloggedinContent>
                  <CenterAlignedRow>
                    <i className="icon-userloggedin" />
                    <LargeSpacer size={8} />
                    {props.userInfo.firstName}
                  </CenterAlignedRow>
                </UserloggedinContent>
              )
              :
              (
                <BasicButton
                  primary
                  inverted
                  fontSize="14"
                  radius="25"
                  width="55%"
                  padding="7"
                  onClicked={() => navigateToModal(props.location, props.history, '/accountManagement/login')}
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
                    <Dropdown.Item key={item.name}>
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
                  onClicked={e => logout(e, props.invalidateUser)}
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
