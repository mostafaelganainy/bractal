// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const supportedSizes = [
  'largeDesktop',
  'desktop',
  'tablet',
  'mobile',
  'xsmall',
];

export const mediaSizesMax = {
  largeDesktop: 10240,
  desktop: 1370,
  tablet: 1100,
  mobile: 800,
  xsmall: 500,
};

export const mediaSizesMin = {
  largeDesktop: 1370,
  desktop: 1100,
  tablet: 800,
  mobile: 500,
  xsmall: 250,
};


const emSizeString = (mediaName, isMax) => (isMax ? (
  `${mediaSizesMax[mediaName] / 16}em`
) : (
  `${mediaSizesMin[mediaName] / 16}em`
));


const cssMedia = isMax => supportedSizes.reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = emSizeString(label, isMax);
  const queryMode = isMax ? 'max-width' : 'min-width';

  return {
    ...accumulator,
    [label]: (...args) => css`
      @media (${queryMode}: ${emSize}) {
        ${css(...args)}
      }
    `,
  };
}, {});

// iterate through the sizes and create a media template
export const cssMediaMax = cssMedia(true);
export const cssMediaMin = cssMedia(false);

export const mediaQueryMax = mediaName => `(max-width: ${emSizeString(mediaName, true)})`;
export const mediaQueryMin = mediaName => `(min-width: ${emSizeString(mediaName, false)})`;
