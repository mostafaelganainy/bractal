import t, { maybe } from 'tcomb-form';
import changeCase from 'change-case';

import FormLayout from './FormLayout';
import Templates from './Template';

t.String.getValidationErrorMessage = (value, path) =>
  `${changeCase.sentenceCase(path[0])}, value is invalid`;

const defineSubtype = (type, predicate, getValidationErrorMessage, name) => {
  const Subtype = t.refinement(
    type,
    predicate,
    name,
  );
  Subtype.getValidationErrorMessage = getValidationErrorMessage;
  return Subtype;
};

const RequiredString = defineSubtype(
  maybe(t.String),
  val => val && val.trim().length > 0,
  (val, path) => {
    const field = path && path.length > 0 && path[0];
    if (!val || val.trim().length === 0) {
      return `${changeCase.sentenceCase(field)}, should't be left blank`;
    }
    return null;
  },
  'Required',
);

const RequiredNumber = defineSubtype(
  maybe(t.String),
  (val) => {
    const cleanedVal = val.replace(/[ ()-]/g, '');
    return parseInt(cleanedVal, 10).toString() === cleanedVal;
  },
  (val, path) => {
    const field = path && path.length > 0 && path[0];
    if (!val || val.trim().length === 0) {
      return `${changeCase.sentenceCase(field)}, should't be left blank`;
    }
    return null;
  },
  'Required',
);

const Email = defineSubtype(
  RequiredString,
  (val) => {
    // eslint-disable-next-line
    const emailMatch = val && val.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailMatch >= 0;
  },
  (val, path) => {
    const field = path && path.length > 0 && path[0];
    return `${changeCase.sentenceCase(field)}, isn't valid`;
  },
  'Required',
);


const Types = {
  RequiredString,
  RequiredNumber,
  Email,
  Boolean: t.Boolean,
};


export const getTcombOptionsFromRawOptions = (rawOptions) => {
  const tcombOptions = {
    template: rawOptions.customLayout || FormLayout,
    auto: 'placeholders',
    fields: {},
  };

  rawOptions.fields.forEach((option) => {
    tcombOptions.fields[option.name] = {
      template: Templates[option.input_type],
      attrs: {
        placeholder: option.placeholder,
        label: option.label,
        checkboxNote: option.checkboxNote,
        importantLabel: option.importantLabel,
        overrideType: option.overrideType,
      },
    };
  });

  return tcombOptions;
};

export const getTcombTypesFromRawOptions = (rawOptions) => {
  const tcombTypesObject = {};

  rawOptions.fields.forEach((option) => {
    tcombTypesObject[option.name] = Types[option.type];
  });

  return t.struct(tcombTypesObject);
};
