import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import DepartmentTabPanContent from './DepartmentTabPanContent';

export default class DepartmentsTab extends Component {
  state = {};

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  render() {
    const panes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let item;
    panes.forEach((dep, i) => {
      item = {
        menuItem: {
          key: `Department# ${i}`,
          icon: 'angle right',
          content: `Department# ${i}`,
        },
        render: () => <DepartmentTabPanContent />,
      };
      panes[i] = item;
    });

    return (
      <div className="departments-tabs">
        <Tab menu={{ attached: 'bottom' }} panes={panes} />
      </div>
    );
  }
}
