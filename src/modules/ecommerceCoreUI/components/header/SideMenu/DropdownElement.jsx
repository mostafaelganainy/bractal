import React from 'react';
import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';
import DropDownElementAccount from './DropDownElementAccount';
import DropDownTracks from './DropDownTracks';

const AccordionList = styled.div`
  background: #148ce5;
  ul {
    padding-left: 0;
    margin: 0;
    li {
      padding: 7px 27px;
      font-size: ${props => props.theme.fonts.sizes.small}px;
      text-transform: capitalize;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      i,img {
        margin-right:8px;
      }
      img {
        width:15px;
        top: 2px;
        position: relative;
      }
    }
  }
`;
const AccordionMainList = styled.div`

  .ui.accordion {    
    &:not(.styled) {
      .title ~ .content:not(.ui) {
        padding: 0;
      }

      .accordion .title ~ .content:not(.ui) {
        padding: 0;
      }      
    }
    .accordion{
      margin:0;
    }
  }  
  
  .accordion.ui.inverted {
    .title {
      padding: 11px 27px;
      font-size: ${props => props.theme.fonts.sizes.small}px;
      text-transform: capitalize;
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);        
      :after {
        content : '';
        position: absolute;
        left: 13px;
        top: 17px;
        width: 6px;
        height: 6px;
        background-color: ${props => props.theme.colors.named.white};
        border-radius: 50%;
      }
      :before {
        content : '\\e811';
        font-family: fontello, sans-serif;
        position: absolute;
        right: 13px;
        top: 10px;
        font-size: 10px;
      }
      i{
        display: none;
      }
    }
    .title.active:before{
      content : '\\e813';
    }
    .content .title {
      i{
        display:none;
      }
      :after {
        content: initial;
      }
    }
    .content .accordion{
      background: #148ce5;
    }
    .content .content .accordion{
      background: #0d80d5;
      .title {
        padding: 7px 37px;
      }
    }
    .content .content .content .accordion{
      background : #0b73c1;
      .title{
        padding: 7px 47px;
      }
    }
    .content .content .content .content li{
      background: #045fa2;
      padding: 7px 57px;
    }
  }
`;
// Account
const AccountContent = (
  <AccordionList>
    <DropDownElementAccount />
  </AccordionList>
);
// Tracks
const TracksContent = (
  <AccordionList>
    <DropDownTracks />
  </AccordionList>
);

// Departments
const CategoryContent = (
  <AccordionList>
    <ul>
      <li>sub category</li>
    </ul>
  </AccordionList>
);

const SubDeaprtmentsPanels = [
  { key: 'panel-3a', title: 'Category', content: { content: CategoryContent } },
  { key: 'panel-3b', title: 'Category', content: { content: CategoryContent } },
];

const SubDeaprtmentsContent = (
  <Accordion.Accordion panels={SubDeaprtmentsPanels} />
);

const DepartmentsPanels = [
  {
    key: 'panel-3a',
    title: 'Sub department #1',
    content: { content: SubDeaprtmentsContent },
  },
  {
    key: 'panel-3b',
    title: 'Sub department #2',
    content: { content: SubDeaprtmentsContent },
  },
];

const DepartmentsContent = (
  <Accordion.Accordion panels={DepartmentsPanels} />
);

const MainDeapartmentsPanels = [
  {
    key: 'panel-2a',
    title: 'Department #1',
    content: { content: DepartmentsContent },
  },
  {
    key: 'panel-2b',
    title: 'Department #2',
    content: { content: DepartmentsContent },
  },
];

const MainDeapartmentsContent = (
  <Accordion.Accordion panels={MainDeapartmentsPanels} />
);

// Language
const LanguageContent = (
  <AccordionList>
    <ul>
      <li className="selected"><img src="images/Header/uk.png" alt="" />EN</li>
      <li className="ar"><img src="images/Header/qr.png" alt="" />AR</li>
    </ul>
  </AccordionList>
);

// Currency
const CurrencyContent = (
  <AccordionList>
    <ul>
      <li>QAR</li>
      <li>QAR</li>
      <li>QAR</li>
    </ul>
  </AccordionList>
);
const rootPanels = [
  { key: 'panel-1', title: 'My account', content: { content: AccountContent } },
  { key: 'panel-2', title: 'Tracks', content: { content: TracksContent } },
  {
    key: 'panel-3',
    title: 'Departments',
    content: { content: MainDeapartmentsContent },
  },
  {
    key: 'panel-4',
    title: 'Language',
    content: { content: LanguageContent },
  },
  {
    key: 'panel-5',
    title: 'Currency',
    content: { content: CurrencyContent },
  },
];

const DropdownElement = () => (
  <AccordionMainList>
    <Accordion panels={rootPanels} inverted />
  </AccordionMainList>
);

export default DropdownElement;
