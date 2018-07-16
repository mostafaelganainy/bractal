// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import styled from 'styled-components';

const Button = styled(BasicButton)`
  margin: 0;
  outline: 0;
  line-height: 0.9914286em;
  padding: 0.37857143em 1em;
  font-size: 12px;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 1.8571429rem;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0;
  position: relative;
  cursor: pointer;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 120px;
  white-space: nowrap;
  padding-left: 9px;
  height: 37px;
  max-height: 37px;
`;

export default class CountriesCode extends Component {
  componentDidMount() {
    // this.props.loadSelectedItem();
  }
  showDropdown = () => {
    // this.props.showDropdown();
  };
  render() {
    return (
      <div>
        <Button onClick={this.showDropdown} >
          {/* {this.props.SelectedImg !== ''
        ? <img src={this.props.SelectedImg} alt={this.props.SelectedItem} />
        : ''
        } */}
          <span className="codeSelected">
            {/* {this.props.SelectedItem} */}
          </span>
        </Button>
        <span className="triangle">&#9660;</span>
      </div>
    );
  }
}

// CountriesCode.propTypes = {
//   showDropdown: PropTypes.func.isRequired,
//   SelectedImg: PropTypes.string.isRequired,
//   SelectedItem: PropTypes.string.isRequired,
//   loadSelectedItem: PropTypes.func.isRequired,
// };
