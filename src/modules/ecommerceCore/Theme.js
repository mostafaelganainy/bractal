const Theme = {
  colors: {
    primary: '#33a8ff',
    primaryHover: '#63b8ff',
    primaryClicked: '#73c8ff',
    primaryDark: '#2c8bd2',
    secondary: '#fb9410',
    secondaryHover: '#fba420',
    secondaryClicked: '#fc9430',
    secondaryDark: '#cc790e',
    labels: {
      important: '#000000',
      normal: 'rgba(0, 0, 0, 0.5)',
      subtle: 'rgba(0, 0, 0, 0.35)',
      hint: 'rgba(0, 0, 0, 0.22)',
    },
    invertedLabels: {
      important: 'white',
      normal: 'rgba(255, 255, 255, 0.7)',
      subtle: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.3)',
    },
    named: {
      white: '#FFFFFF',
    },
  },
  fonts: {
    sizes: {
      xxLarge: 36,
      xLarge: 25,
      large: 18,
      medium: 16,
      small: 14,
      xSmall: 12,
      xxSmall: 11,
    },
  },
  paddings: {
    xsmall: 2,
    small: 5,
    medium: 10,
    large: 15,
    xLarge: 20,
    xxLarge: 25,
    xxxLarge: 30,
    xxxxLarge: 35,
    xxxxxLarge: 40,
  },
  borders: {
    size: {
      thin: 1,
      normal: 2,
      bold: 3,
    },
    color: {
      light: 'rgba(0,0,0,0.1)',
      normal: 'rgba(0,0,0,0.3)',
      dark: 'rgba(0,0,0,0.5)',
    },
    radius: {
      small: 2,
      normal: 5,
      large: 10,
    },
  },
  inputs: {
    radius: 25,
    placeholderColor: 'rgba(0,0,0,0.22)',
    borderColor: 'rgba(0,0,0,0.22)',
    color: 'rgba(0, 0, 0, 0.5)',
    padding: '12px 15px',
    borderWidth: 1,
  },
  buttons: {
    radius: 5,
    fontSize: 16,
    padding: 15,
    border: 1, // Only applicable in the inverted state
  },
};

module.exports = Theme;
