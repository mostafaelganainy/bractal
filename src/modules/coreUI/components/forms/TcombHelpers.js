import t from 'tcomb-form';
import changeCase from 'change-case';

import FormLayout from './FormLayout';
import Templates from './Template';


const Age = t.refinement(t.Number, n => n >= 18);

// if you define a getValidationErrorMessage function, it will be called on validation errors
Age.getValidationErrorMessage = (value, path, context) => {
  if (context && context.serverErrors && context.serverErrors[path[0]]) {
    return context.serverErrors[path[0]];
  } else if (!value) {
    return `${changeCase.titleCase(path[0])} shouldn't be blank`;
  }
  return null;
};


export const getTcombOptionsFromRawOptions = (rawOptions) => {
  const tcombOptions = {
    template: FormLayout,
    auto: 'placeholders',
    fields: {},
  };

  rawOptions.forEach((option) => {
    tcombOptions.fields[option.name] = {
      template: Templates[option.input_type],
      attrs: {
        placeholder: option.placeholder,
      },
    };
  });

  return tcombOptions;
};

export const getTcombTypesFromRawOptions = (rawOptions) => {
  const tcombTypesObject = {};

  rawOptions.forEach((option) => {
    tcombTypesObject[option.name] = Age; // t[option.tcomb_type];
  });

  return t.struct(tcombTypesObject);
};
