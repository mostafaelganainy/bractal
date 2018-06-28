import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const trigger = (
  <span>
    <Icon name="bars" />
  </span>
);
const DropDownBurger = ({ handleClick }) => (
  <Dropdown trigger={trigger} onClick={handleClick} />
);

DropDownBurger.propTypes = {
  // eslint-disable-next-line function-paren-newline
  handleClick: PropTypes.func.isRequired,
};

export default DropDownBurger;
