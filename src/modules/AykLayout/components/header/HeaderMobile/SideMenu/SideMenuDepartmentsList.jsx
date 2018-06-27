import React from 'react';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Trans, translate } from 'react-i18next';
import PropTypes from 'prop-types';

const DropDownItemsList = dropDownList => (
  <React.Fragment>
    {dropDownList.map(dropdown => (
      <Menu.Item key={dropdown}>
        <Dropdown text={dropdown} fluid icon="angle right">
          <Dropdown.Menu>
            <Dropdown.Item text="Department#1" />
            <Dropdown.Item text="Department#2" />
            <Dropdown.Item text="Department#3" />
            <Dropdown.Item text="Department#4" />
            <Dropdown.Item text="Department#5" />
            <Dropdown.Item text="Department#6" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    ))
    }
  </React.Fragment>
);

const SideMenuDepartmentsList = ({ dropDownList }) => (
  <div className="menu-tracks dropdown-menu-list">
    <Header as="h4">
      <Trans i18nKey="HeaderSubMenuTracks" />
    </Header>
    {DropDownItemsList(dropDownList)}
  </div>
);

SideMenuDepartmentsList.propTypes = {
  dropDownList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default translate('aykLayout')(SideMenuDepartmentsList);
