/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import ExternalLink from './ExternalLink';

export default class NavSocialMedia extends Component {
  state = {};
  render() {
    return (
      <Menu.Menu position="right" className="social-media">
        <Menu.Item>
          <ExternalLink url="http://www.google.com">
            <i
              className="icon-fb"
            />
          </ExternalLink>
        </Menu.Item>
        <Menu.Item>
          <ExternalLink url="http://www.google.com">
            <i
              className="icon-twitter"
            />
          </ExternalLink>
        </Menu.Item>
        <Menu.Item>
          <ExternalLink url="http://www.google.com">
            <i
              className="icon-shape-26"
            />
          </ExternalLink>
        </Menu.Item>
        <Menu.Item>
          <ExternalLink url="http://www.google.com">
            <i
              className="icon-instagrame"
            />
          </ExternalLink>
        </Menu.Item>
      </Menu.Menu>
    );
  }
}
