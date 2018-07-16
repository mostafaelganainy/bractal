/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Input } from 'semantic-ui-react';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';

export const SimpleDropdownTriggerStyles = props => (css`
  font-size: ${props.theme.fonts.sizes.xSmall}px;
  line-height: ${props.theme.fonts.sizes.xSmall}px;
`);

export const SearchDropdownTriggerStyles = props => (css`
  font-size: ${props.theme.fonts.sizes.small}px;
  line-height: ${props.theme.fonts.sizes.small}px;
  font-weight: bold;
  color: ${props.theme.colors.labels.normal};
`);

export const StyledHeaderDropdownContainer = styled.div`
  .chevron {
    font-size: ${props => 0.75 * props.theme.fonts.sizes.xSmall}px;
    padding-left: ${props => 0.35 * props.theme.fonts.sizes.xSmall}px; 
    padding-top: 1px;   
  }
`;

export const StyledProductSearchDropdownContainer = styled.div`
  flex-grow: 1;

  .dropdown {     
    height: 40px;       

    background: white;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    border-bottom-left-radius: ${props => props.theme.borders.radius.normal}px;
    border-top-left-radius: ${props => props.theme.borders.radius.normal}px;
  }

  .chevron {
    font-size: ${props => 0.75 * props.theme.fonts.sizes.xSmall}px;
    padding-left: ${props => 0.75 * props.theme.fonts.sizes.xSmall}px;  
    padding-top: 1px;  
  }
`;

export const StyledProductsSearch = styled(Row)`
  flex-grow: 1;

  border: solid;
  border-radius: ${props => props.theme.borders.radius.normal}px;
  border-width: ${props => props.theme.borders.size.thin}px;
  border-color: ${props => props.theme.borders.color.light};
`;

export const StyledProductsSearchInput = styled(Input)`
  &&&&& {    
    height: 40px;    
    flex-grow: 4;

    input {
      font-size: 14px;

      padding: 6px;
      padding-left: 15px;
      
      border: 0;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;      

      border-left: solid;
      border-width: ${props => props.theme.borders.size.thin}px;
      border-color: ${props => props.theme.borders.color.light};
    }

    button {
      padding: 5px;
      padding-left: 10px;
      padding-right: 10px;

      background-color: white;
      
      i {
        height: 16px;

        &:after {
          top: 8px;
          bottom: 8px;
          right: 37px;          
          width: 2px;
          
          content: "";
          position: absolute;
          
          background-color: ${props => props.theme.borders.color.light};
        }
      }      
    }
  }
`;
