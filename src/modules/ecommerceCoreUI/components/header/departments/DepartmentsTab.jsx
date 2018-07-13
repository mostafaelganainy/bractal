import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import DepartmentTabPanContent from './DepartmentTabPanContent';

const DepartmentsTabContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  border-radius: 7px;
  z-index: 1;
  .ui[class*="bottom attached"].menu {
    display: inline-block;
    width: 20%;
    float: left;
    border-top-right-radius: 0;
    height: 432px;
    border-bottom-right-radius: 0;
    border-top: 1px solid #e1e1e1 !important;
    background-color: #fff;
    a {
      color: #b4b4b4;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 85%;
        left: 7%;
        border-top: 1px solid #e1e1e1;
        bottom: 0;
      }
      &:last-child:after {
        content: initial;
      }
    }
  }
  .ui.vertical.menu .active.item {
    color: #309de0;
  }
  .ui.attached + .ui.attached.menu:not(.top) {
    padding: 15px 0;
  }
  .ui.menu {
    margin: 0;
  }
  .ui.bottom.attached.menu:before {
    content: "";
    height: 15px;
    width: 15px;
    background: #fff;
    position: absolute;
    top: -8px;
    left: 22px;
    transform: rotate(134deg);
    border-left: 1px solid #d4d4d5;
    border-bottom: 1px solid #d4d4d5;
  }
  .item {
    color: rgba(0,0,0,0.7);
    font-weight: bold;
    > i.icon {
      position: absolute;
      right: 7px;
      font-size: 14px;
      text-transform: capitalize;
      color: #cacaca;
    }
  }
  .ui.menu .active.item,
  .ui.menu .active.item:hover,
  .ui.link.menu .item:hover,
  .ui.menu .dropdown.item:hover,
  .ui.menu .link.item:hover,
  .ui.menu a.item:hover {
    color: #309de0;
    font-weight: bold;
    background-color: transparent;
    i {
      color: #309de0;
    }
  } 
`;
export default class DepartmentsTab extends Component {
  state = {};

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  render() {
    const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let item;
    panes.forEach((dep, i) => {
      item = {
        menuItem: {
          key: `Department# ${i + 1}`,
          icon: 'angle right',
          content: `Department# ${i + 1}`,
        },
        render: () => <DepartmentTabPanContent />,
      };
      panes[i] = item;
    });

    return (
      <DepartmentsTabContent>
        <Tab menu={{ attached: 'bottom' }} panes={panes} />
      </DepartmentsTabContent>
    );
  }
}
