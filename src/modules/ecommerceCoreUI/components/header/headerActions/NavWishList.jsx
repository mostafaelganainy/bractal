import React, { Component } from 'react';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';

export default class NavWishList extends Component {
  state = {};
  render() {
    return (
      <IconOnlyButton primary iconName="icon-heart-1" size={28} />
    );
  }
}
