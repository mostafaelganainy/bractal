/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

export default class NavSocialMedia extends Component {
  state = {};
  render() {
    return (
      <Menu.Menu position="right" className="social-media">
        <Menu.Item>
          <Link to="http://www.google.com" target="_self ">
            <Image
              verticalAlign="middle"
              src="images/SocialMedia/fb-lg.png"
              alt=""
            />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a href="">
            <Image
              verticalAlign="middle"
              src="images/SocialMedia/tr-lg.png"
              alt=""
            />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="">
            <Image
              verticalAlign="middle"
              src="images/SocialMedia/yb-lg.png"
              alt=""
            />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="">
            <Image
              verticalAlign="middle"
              src="images/SocialMedia/inst-lg.png"
              alt=""
            />
          </a>
        </Menu.Item>
      </Menu.Menu>
    );
  }
}
