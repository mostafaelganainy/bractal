import React, { Component } from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import DepartmentsTab from './Departments/DepartmentsTab';
import SocialMedia from '../Common/SocialMedia';

import DropDownBurger from '../../common/DropDownBurger';

export default class Departments extends Component {
  state = {
    featuredDepartments: [
      'Department#1',
      'Department#2',
      'Department#3',
      'Department#4',
      'Department#5',
      'Department#6',
    ],
    viewDepartments: false,
  };
  handleClick = () => {
    this.setState({ viewDepartments: !this.state.viewDepartments });
  };
  render() {
    const { viewDepartments } = this.state;

    const featuredDepartmentsList = this.state.featuredDepartments.map(department => (
      <Menu.Item key={department} name={department}>
        {department}
      </Menu.Item>
    ));

    let viewDepartmentsTab;
    if (viewDepartments) {
      viewDepartmentsTab = <DepartmentsTab />;
    }
    return (
      <div className="nav-department">
        <Container>
          <Menu>
            <DropDownBurger handleClick={this.handleClick} />

            <Menu.Menu className="featured-departments">
              {featuredDepartmentsList}

              {featuredDepartmentsList.length > 5 && (
                <Menu.Item className="more">
                  <Image src="/images/Header/more.png" />
                </Menu.Item>
              )}
            </Menu.Menu>

            <SocialMedia />
          </Menu>

          {viewDepartmentsTab}
        </Container>
      </div>
    );
  }
}
