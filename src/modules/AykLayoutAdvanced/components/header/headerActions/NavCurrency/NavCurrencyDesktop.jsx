import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { VerticalAlign } from 'modules/core/styles/containers';

const NavCurrencyDesktop = props => (
  <VerticalAlign>
    <Dropdown
      text="QAR"
      pointing
      icon="chevron down"
      className="set-currency"
    >
      <Dropdown.Menu>
        <Dropdown.Item active className="selected">
          {props.currency[0].text}
        </Dropdown.Item>
        <Dropdown.Item>{props.currency[1].text}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </VerticalAlign>
);

NavCurrencyDesktop.propTypes = {
  // eslint-disable-next-line function-paren-newline
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
};

export default NavCurrencyDesktop;
