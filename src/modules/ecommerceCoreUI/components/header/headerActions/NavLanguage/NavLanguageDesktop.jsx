import React from 'react';
import i18next from 'i18next';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import {
  customTriggerLabelStyles,
  StyledHeaderDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const options = [
  {
    text: 'EN',
    value: 'en',
    image: { src: 'images/Header/uk.png' },
  },
  {
    text: 'AR',
    value: 'ar',
    image: { src: 'images/Header/ar.png' },
  },
];

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
        <Dropdown
          options={options}
          selectedValue={currentLanguage}
          customTriggerLabelStyles={customTriggerLabelStyles}
          onChange={this.onChange}
        />
      </StyledHeaderDropdownContainer>
    );
  };
}
