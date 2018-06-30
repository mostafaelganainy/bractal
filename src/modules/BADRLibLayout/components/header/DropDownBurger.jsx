import React from 'react';
import { Icon } from 'semantic-ui-react';

const style = {
  width: '61px',
  color: '#fff',
  backgroundColor: '#33a8ff',
  fontSize: '20px',
  cursor: 'pointer',
  borderTopLeftRadius: '7px',
  borderBottomLeftRadius: '7px',
  // Draw outside the border slightly
  marginTop: '-1px',
  marginBottom: '-1px',
  marginLeft: '-1px',
  // Center content, horizontal/vertical
  display: 'flex',
  alignItems: 'center',
  height: '51px',
  flexDirection: 'column',
  justifyContent: 'center',
};

const iconStyle = {
  marginRight: 0,
  verticalAlign: 'middle',
};

const DropDownBurger = () => (
  <div style={style}>
    <Icon style={iconStyle} name="bars" />
  </div>
);

export default DropDownBurger;
