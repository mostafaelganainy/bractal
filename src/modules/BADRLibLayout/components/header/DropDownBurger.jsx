import React from 'react';
import { Icon } from 'semantic-ui-react';

const style = {
  width: '61px',
  color: '#fff',
  alignItems: 'center',
  backgroundColor: '#33a8ff',
  textAlign: 'center',
  paddingTop: '1px',
  'border-top-left-radius': '7px',
  'border-bottom-left-radius': '7px',
  'font-size': '20px',
};

const iconStyle = {
  marginRight: 0,
};

const DropDownBurger = () => (
  <div style={style}>
    <Icon style={iconStyle} name="bars" />
  </div>
);

export default DropDownBurger;
