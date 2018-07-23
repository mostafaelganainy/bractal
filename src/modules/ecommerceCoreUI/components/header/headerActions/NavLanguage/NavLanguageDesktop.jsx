import React from 'react';
import i18next from 'i18next';
import styled from 'styled-components';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import {
  SimpleDropdownTriggerStyles,
  StyledHeaderDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const options = [
  {
    text: 'EN',
    value: 'en',
    image: { src: '/images/Header/uk.png' },
  },
  {
    text: 'AR',
    value: 'ar',
    image: { src: '/images/Header/ar.png' },
  },
];
const DropdownLanguageItems = styled.div`
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
  img{
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle !important;    
  }
  .menu > .item > img {
    margin-right: 8px;
  }
  .visible.menu.transition {
    padding: 8px;
    .active.item {
      padding-right: 20px !important;
      span{
        color: ${props => props.theme.colors.primary} !important;
      }
      position: relative;
      background-color: transparent !important;
      font-weight: 300 !important;
      &:after {
        content: "\\F058";
        font-family: Icons, sans-serif;
        position: absolute;
        right: 0;
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.fonts.sizes.small}px;
      }
    }
  }
  .ui.top.right.pointing.dropdown>.menu{
    right: -17px;
    &:after{
      right: 38px !important;
    }
    
  }
  .ui.dropdown .menu > .item {
    padding: 8px 3px !important;
    border-bottom: 1px solid #ebebeb;
    font-size: 11px !important;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0 !important;
    }
    &:hover{
      background-color: transparent !important;
    }
  }
`;

export default class NavLanguageDesktop extends React.Component {
  state = {
    currentLanguage: i18next.language,
  }

  onChange = (value) => {
    i18next.changeLanguage(value, (err) => {
      if (err) throw err;

      this.setState({
        currentLanguage: i18next.language,
      });
    });
  };

  render = () => {
    const { currentLanguage } = this.state;

    return (
      <StyledHeaderDropdownContainer>
        <DropdownLanguageItems>
          <Dropdown
            options={options}
            pointing="top right"
            selectedValue={currentLanguage}
            customTriggerLabelStyles={SimpleDropdownTriggerStyles}
            onChange={this.onChange}
          />
        </DropdownLanguageItems>
      </StyledHeaderDropdownContainer>
    );
  };
}
