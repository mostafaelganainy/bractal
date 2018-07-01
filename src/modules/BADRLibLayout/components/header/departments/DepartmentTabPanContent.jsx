/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Tab, List, Grid, Header } from 'semantic-ui-react';

export default class TabPanContent extends Component {
  state = {};
  render() {
    return (
      <Tab.Pane className="tab-content">
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
      </Tab.Pane>
    );
  }
}
