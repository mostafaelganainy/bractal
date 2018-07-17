// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';

import { XSmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const getBorderColor = (props, forceFocusMode) => {
  if (forceFocusMode || props.actAsInFocus) {
    return props.theme.colors.primary;
  }

  return props.theme.inputs.borderColor;
};

const Button = styled.button`
  display: flex;
  position: relative;  
  overflow: hidden;
  width: 100%;
  height: ${props => props.theme.paddings.xxxxxLarge + 4}px;

  align-items: center;

  font-size: ${props => props.fontSize || props.theme.inputs.fontSize}px;

  color: ${props => (props.label ? props.theme.inputs.color : props.theme.inputs.placeholderColor)};
  background-color: white;

  padding-left: ${props => props.theme.paddings.large}px;
  padding-right: ${props => props.theme.paddings.large}px;
  white-space: nowrap;

  text-align: left;
  text-overflow: ellipsis; 

  outline: none;
  border: solid ${props => props.theme.inputs.borderWidth}px ${props => getBorderColor(props)};
  border-radius:${props => props.theme.inputs.radius}px;
  border-top-right-radius:${props => props.rightBorderRadius || props.theme.inputs.radius};
  border-bottom-right-radius:${props => props.rightBorderRadius || props.theme.inputs.radius};
  
  cursor: pointer;   

  img {
    width: 20px;
    height: 20px;

    border-radius: 50%;    
  }

  &:focus {
    border: solid ${props => props.theme.inputs.borderWidth}px ${props => getBorderColor(props, true)};
  }
`;

const ButtonContainer = styled(CenterAlignedRow)`
  position: relative;  
  width:${props => (props.width ? props.width : '100%')};  

  align-items: stretch;
`;

const DropdownIconContainer = styled(CenterAlignedColumn)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: ${props => props.dropIconDistanceFromRight || props.theme.paddings.xLarge}px;  

  justify-content: center;
  
  cursor: pointer;

  i {
    line-height: 1;
    font-size: 8px;

    color: ${props => props.theme.inputs.borderColor};
  }
`;

// eslint-disable-next-line
class CustomButton extends React.Component {
  focus = () => {
    this.buttonRef.focus();
  }
  render = () => {
    const {
      width,
      onClick,
      rightBorderRadius,
      image,
      label,
      placeholder,
      dropIconDistanceFromRight,
      fontSize,
      actAsInFocus,
      onKeyUp,
      onFocus,
      visible,
    } = this.props;

    return (
      <ButtonContainer
        width={width}
        onClick={onClick}
        onKeyUp={onKeyUp}
        visible={visible}
      >
        <Button
          onFocus={onFocus}
          innerRef={(ref) => { this.buttonRef = ref; }}
          fontSize={fontSize}
          rightBorderRadius={rightBorderRadius}
          label={label}
          actAsInFocus={actAsInFocus}
        >
          {image}
          <XSmallSpacer />
          {label || placeholder}
        </Button>
        <DropdownIconContainer dropIconDistanceFromRight={dropIconDistanceFromRight}>
          <Icon name="chevron down" />
        </DropdownIconContainer>
      </ButtonContainer>
    );
  };
}

CustomButton.defaultProps = {
  image: null,
  label: null,
  placeholder: 'Select',
  width: '100%',
  dropIconDistanceFromRight: null,
  rightBorderRadius: null,
  fontSize: null,
  actAsInFocus: false,
  onFocus: null,
  visible: false,
};
CustomButton.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  rightBorderRadius: PropTypes.string,
  dropIconDistanceFromRight: PropTypes.number,
  fontSize: PropTypes.number,
  actAsInFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  visible: PropTypes.bool,
};

export default CustomButton;
