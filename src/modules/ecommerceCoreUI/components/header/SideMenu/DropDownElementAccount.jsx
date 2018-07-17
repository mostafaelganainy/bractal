import React from 'react';
import { PropTypes } from 'prop-types';

import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';


const DropDownElementAccount = (props) => {
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
    <ul>
      {
        AccountItems.map((item) => {
          if (item.guestView || props.authenticated) {
              return (
                <li>
                  <CenterAlignedRow>
                    <i className={item.icon} />
                    <LargeSpacer size={8} />
                    {item.name}
                  </CenterAlignedRow>
                </li>
              );
            }
            return '';
        })
      }
    </ul>
  );
};

DropDownElementAccount.propTypes = PropTypes.shape({
  authenticated: PropTypes.boolen,
}).isRequired;

export default withUserInfo(DropDownElementAccount);
