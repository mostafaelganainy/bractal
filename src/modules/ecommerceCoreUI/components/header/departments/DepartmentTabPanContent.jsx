/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Tab, List, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const TabContent = styled(Tab.Pane)`      
  background-color: #e1e1e1;
  .ui.header {
    color: #636363;
    font-size: 14px;
  }
  a {
    text-transform: capitalize;
    color: rgba(0, 158, 255, 0.8);
    text-decoration: underline;
    font-size: 12px;
  }
  .ui.grid > .column:not(.row),
  .ui.grid > .row > .column {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .list .item {
    text-transform: capitalize;
    font-size: 12px;
    color: #a8a8a8;
  }
  .ui.bulleted.list > .item,  
  .ui.bulleted.list .list > .item,
  ul.ui.list li {
    color: #636363;
    font-size: 12px;
    font-weight: 300;
    text-transform: capitalize;
  }
  .ui.grid > .row {
    padding-top: 27px;
    padding-bottom: 27px;
  }
  &.ui.tab.active,
  &.ui.tab.open {
    display: inline-block;
    width: 80%;
    height: 432px;
    border-top-right-radius: 7px;
    border-top: 1px solid #e1e1e1;
    background-color: #fafafa;
  }
`;
const TabPanContent = () => (
  <TabContent className="tab-content">
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Header as="h4">Sub-Department#1</Header>
          <List bulleted>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
          </List>
          <a href="">view all</a>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h4">Sub-Department#2</Header>

          <List bulleted>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
          </List>
          <a href="">view all</a>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h4">Sub-Department#3</Header>

          <List bulleted>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
          </List>
          <a href="">view all</a>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h4">Sub-Department#4</Header>

          <List bulleted>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
            <List.Item>Category</List.Item>
          </List>
          <a href="">view all</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </TabContent>
);

export default TabPanContent;
