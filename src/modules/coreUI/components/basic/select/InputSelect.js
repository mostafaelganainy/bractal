import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { SmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import SelectButton from './CustomSelectButton';
import SelectList from './SelectList';


const RelativePosition = styled(CenterAlignedRow)`
  width: ${props => props.width || '100%'};

  position:relative;

  box-sizing: border-box;
`;

const Input = styled.input`
  width: ${props => props.width || '100%'};
  outline: none;

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 12px;

  color: ${props => props.theme.inputs.color};  

  border: 1px solid;
  border-color: rgba(0,0,0,0.22);
  border-radius: 25px;  
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  ::placeholder {
    color: ${props => props.theme.inputs.placeholderColor};
  }

  &:focus {
    border: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.colors.primary};
  }
`;

class InputSelect extends Component {
  state = {
    selectedValue: null,
    optionsMap: {},
  }

  // CHange this to reduceStatefromProps
  componentDidMount = () => {
    const optionsMap = {};
    this.props.options.forEach((entry) => {
      optionsMap[entry.value] = entry;
    });

    this.setState({
      optionsMap,
    });
  }

  onListItemSelected = (item) => {
    this.setState({
      selectedValue: item.value,
    });
  }
  onKeyUp = (e) => {
    const controls = ['ArrowUp', 'ArroDown', ' ', 'Enter'].includes(e.key);
    const chars = e.key.search(/[a-zA-Z]/) >= 0;
    if (controls) {
      this.showDropdown();
    } else if (chars) {
      // this.props.onKeydown(e.key, true);
    }
  };
  getSelectedItemImage = () => {
    const { optionsMap, selectedValue } = this.state;
    const { getSelectedItemImage } = this.props;

    if (!optionsMap || !selectedValue) {
      return null;
    }

    const entry = optionsMap[selectedValue];
    if (getSelectedItemImage) {
      return getSelectedItemImage(entry);
    }

    return entry.image;
  }
  getSelectedItemLabel = () => {
    const { optionsMap, selectedValue } = this.state;
    const { getSelectedItemLabel } = this.props;

    if (!optionsMap || !selectedValue) {
      return null;
    }

    const entry = optionsMap[selectedValue];
    if (getSelectedItemLabel) {
      return getSelectedItemLabel(entry);
    }

    return entry.image;
  }

  showDropdown = () => {
    this.listRef.show();
  }

  hideDropdown = () => {
    this.listRef.hide();
  }

  toggleDropdown = () => {
    this.listRef.toggle();
  }

  render() {
    const {
      width,
      options,
      showInput,
      placeholder,
      selectButtonRatio,
      theme,
    } = this.props;

    return (
      <React.Fragment>
        <RelativePosition width={width}>
          <SelectButton
            ref={(ref) => { this.buttonRef = ref; }}
            label={this.getSelectedItemLabel()}
            actAsInFocus={false}
            placeholder={showInput ? 'Select' : placeholder}
            image={this.getSelectedItemImage()}
            width={showInput ? `${selectButtonRatio}%` : '100%'}
            rightBorderRadius={showInput ? '0px' : null}
            fontSize={showInput ? theme.fonts.sizes.xSmall : null}
            dropIconDistanceFromRight={showInput && theme.paddings.medium}
            onClick={this.toggleDropdown}
            onKeyUp={this.onKeyUp}
          />
          {showInput &&
            <React.Fragment>
              <SmallSpacer />
              <Input
                type="text"
                placeholder={placeholder}
                onChange={this.getInputValue}
                width={`${100 - selectButtonRatio}%`}
              />
            </React.Fragment>
          }
          <SelectList
            ref={(ref) => { this.listRef = ref; }}
            options={options}
            onItemSelected={this.onListItemSelected}
            onCloseListRequested={this.closeDropdown}
          />
        </RelativePosition>
      </React.Fragment>
    );
  }
}

InputSelect.defaultProps = {
  showImageOnButton: true,
  placeholder: 'Select',
  selectButtonRatio: 30,
};

InputSelect.propTypes = PropTypes.shape({
  width: PropTypes.string,
  showInput: PropTypes.bool.isRequired,
  showImageOnButton: PropTypes.bool,
  getSelectedItemLabel: PropTypes.fun,
  getSelectedItemImage: PropTypes.fun,
  selectButtonRatio: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}).isRequired;

export default withTheme(InputSelect);
