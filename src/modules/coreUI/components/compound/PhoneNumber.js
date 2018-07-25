import React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InputSelect from '~/modules/coreUI/components/basic/select/InputSelect';

import AllCountries from './AllCountries.json';

class PhoneNumber extends React.Component {
  getCountriesData = () => AllCountries.map(country => ({
    label: country.name,
    image: <Image src={country.flag} alt={country.flag} />,
    value: `+${country.callingCodes[0]}`,
    rightPulledLabel: `+${country.callingCodes}`,
    attrs: {
      callingCodes: country.callingCodes,
    },
  }));

  render = () => (
    <InputSelect
      showInput
      value={this.props.value}
      selectButtonRatio={40}
      onChange={(value, text) => this.props.onChange(`(${value}) ${text}`)}
      showImageOnButton={false}
      getSelectedItemLabel={entry => `+${entry.attrs.callingCodes}`}
      getSelectedItemImage={entry => entry.image}
      placeholder="Phone Number"
      options={this.getCountriesData()}
    />
  );
}

PhoneNumber.defaultProps = {
  value: '',
};

PhoneNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default PhoneNumber;

