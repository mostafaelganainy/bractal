import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="bars" />
  </span>
);
const DropDownBurger = () => (
  <Dropdown trigger={trigger} />
);

export default DropDownBurger;
