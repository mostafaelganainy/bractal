import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function TestDropDown() {
  let option = '';
  option = this.props.ListItems.map(Item => (
    <Dropdown.Item onClick={() => this.props.GetSelectedOpt(Item)}>
      {this.props.hasFlag ?
        <div className="imgCountry">
          <img src={Item.flag} alt={Item.name} className={Item.name} />
        </div> : ''}{
        }

      <span className="ItemName">{Item.name}</span>
      {this.props.hasFlag ?
        <div className="codeLbl">
              +{Item.callingCodes}
        </div> : ''}
    </Dropdown.Item>
  ));
  return (
    <Dropdown
      pointing="top right"
      icon="chevron down"
      className="set-language"
    >
      <Dropdown.Menu>
        {option}
      </Dropdown.Menu>
    </Dropdown>
  );
}
