import styled from 'styled-components';

export default styled.div`
  /* '' */
  @font-face {
    font-family: Panton;
    src: url("fonts/Panton/Panton-Regular.otf"); 
  }

  @font-face {
    font-family: Frutiger;
    src: url("fonts/FrutigerLTArabic/FrutigerLTArabic-55Roman.ttf"); 
  }

  body,
  .ui.menu,
  .ui.header,
  button,
  input,
  optgroup,
  select,
  textarea,
  span {
    font-family: Panton, sans-serif; 
  }

  .ar {
    font-family: Frutiger, sans-serif; 
  }
`;
