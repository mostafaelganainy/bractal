import React, { Component } from 'react';
import SideMenuDepartmentsList from './SideMenu/SideMenuDepartmentsList';
import NavLanguage from '../Common/NavLanguage';
import NavCurrency from '../Common/NavCurrency';
import SocilaMedia from '../Common/SocialMedia';
import SideMenuMainMenu from './SideMenu/SideMenuMainMenu';

export default class HeaderMobileSideMenu extends Component {
  state = {
    dropdowns: [
      'Products',
      'Shops',
      'Homemade',
      'Factories',
      'Health & Beauty Park',
      'Education Park',
    ],

  };
  render() {
    return (
      <div>
        <SideMenuMainMenu />
        <SideMenuDepartmentsList dropDownList={this.state.dropdowns} />
        <NavLanguage />
        <NavCurrency />
        <SocilaMedia />
      </div>
    );
  }
}
