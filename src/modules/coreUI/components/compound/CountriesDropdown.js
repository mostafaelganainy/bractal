import React from 'react';
import { Image } from 'semantic-ui-react';

import InputSelect from '~/modules/coreUI/components/basic/select/InputSelect';

import AllCountries from './AllCountries.json';

const CountriesOptions = AllCountries.map(country => ({
  label: country.name,
  image: <Image src={country.flag} alt={country.flag} />,
  value: country.alpha3Code,
  attrs: {
    callingCodes: country.callingCodes,
  },
}));

export default () => (
  <InputSelect
    showInput={false}
    showImageOnButton={false}
    getSelectedItemLabel={entry => `${entry.label}`}
    getSelectedItemImage={() => null}
    placeholder="Nationality"
    options={CountriesOptions}
  />
);

