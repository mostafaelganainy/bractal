import React from 'react';
import { Image } from 'semantic-ui-react';

import InputSelect from '~/modules/coreUI/components/basic/select/InputSelect';

import AllCountries from './AllCountries.json';

class PhoneNumber extends React.Component {
  getCountriesData = () => AllCountries.map(country => ({
    label: country.name,
    image: <Image src={country.flag} alt={country.flag} />,
    value: country.alpha3Code,
    rightPulledLabel: country.callingCodes,
    attrs: {
      callingCodes: country.callingCodes,
    },
  }));

  render = () => (
    <InputSelect
      showInput
      selectButtonRatio={40}
      showImageOnButton={false}
      getSelectedItemLabel={entry => `+${entry.attrs.callingCodes}`}
      getSelectedItemImage={entry => entry.image}
      placeholder="Phone Number"
      options={this.getCountriesData()}
    />
  );
}

export default PhoneNumber;
