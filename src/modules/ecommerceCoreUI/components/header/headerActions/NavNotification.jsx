import React, { Component } from 'react';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';

export default class NavNotification extends Component {
  state = {};
  render() {
    return (
      <IconOnlyButton primary iconName="icon-bell" />
    );
  }
}
