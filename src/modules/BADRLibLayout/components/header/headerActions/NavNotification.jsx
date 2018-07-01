import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class NavNotification extends Component {
  state = {};
  render() {
    return (
      <div className="notification">
        <Image
          src="images/Header/bell.png"
          srcSet="images/Header/bell@2x.png 2x,
     images/bell@3x.png 3x"
        />
      </div>
    );
  }
}
