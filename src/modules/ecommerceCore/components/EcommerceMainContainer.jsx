import styled from 'styled-components';
import FontSettings from './FontSettings';

export default styled.div`  
  &&& {    
    @media only screen and (min-width: 1200px, max-width: 1450px)
    .container {
      width: 1127px;
      background: red;
      margin-left: auto!important;
      margin-right: auto!important;
    }

    @media only screen and (min-width: 1450px)
    .container {
      width: 1366px;
      background: blue;
    }

    background: #f8f7f7 !important;

    ${FontSettings}
  } 
`;