import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { XSmallLabel } from '~/modules/coreUI/components/basic/Labels';

const ItemName = styled(XSmallLabel)`
  text-align:left;
  flex-grow: 1;
  padding-left: ${props => props.theme.paddings.medium}px;
`;

const Option = styled.li`  
  background: ${props => (props.isFocusOption ? props.theme.colors.cellHoverColorAlt : props.theme.colors.named.white)};
  padding: 5px 15px 5px 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 0.2s ease;
  position: relative;
  font-size: 13px;
  border-bottom: 1px solid #f5f5f5;
  min-height: 40px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.labels.normal};

  &&:hover{
    background: ${props => props.theme.colors.cellHoverColor};
    transition: background 0.2s ease;
  }

  img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: 0px;
  }
`;

export default class FilteredItemsList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.selectedValue !== state.currentFocusValue &&
      props.selectedValue !== state.prevSelectedValueProp
    ) {
      return {
        prevSelectedValueProp: props.selectedValue,
        currentFocusValue: props.selectedValue,
      };
    }
    return null;
  }

  state = {
    prevSelectedValueProp: null, // eslint-disable-line react/no-unused-state
    currentFocusValue: null,
    lastConfiguredOptions: null,
    lastConfiguredFilter: null,
  }

  getOptionRefAt = entry => this[`option_${entry.value}_ref`];
  setOptionRefAt = (entry, ref) => {
    this[`option_${entry.value}_ref`] = ref;
  }

  getElementsArroundCurrentFocus = () => {
    const currVal = this.state.currentFocusValue;
    const list = this.filteredList;

    const result = {
      current: null,
      previous: null,
      next: null,
    };

    let prev = null;
    for (let i = 0; i < list.length; i += 1) {
      if (currVal === list[i].value) {
        result.previous = prev;
        result.current = list[i];
      } else if (prev && currVal === prev.value) {
        result.next = list[i];
        break;
      }
      prev = list[i];
    }

    return result;
  }

  updateFilteredList = (options, filter) => {
    if (options === this.state.lastConfiguredOptions
        && filter === this.state.lastConfiguredFilter) {
      return;
    }

    this.filteredList = options.filter(entry =>
      !filter || entry.label.toLowerCase().indexOf(filter.toLowerCase()) === 0);

    const { current } = this.getElementsArroundCurrentFocus();
    // check if the current focus, is still shown, and filter not changed
    const newFocus =
    (
      current
      && current.value
    ) || (
        this.filteredList[0]
        && this.filteredList[0].value
      );
    this.setState({
      lastConfiguredFilter: filter,
      lastConfiguredOptions: options,
      currentFocusValue: newFocus,
    });
  }

  scrollToEntry = (entry) => {
    const optionRef = this.getOptionRefAt(entry);
    if (optionRef) {
      this.setState({
        currentFocusValue: entry.value,
      });

      setTimeout(
        () => optionRef.scrollIntoViewIfNeeded(), // delay a little bit, since it's
        // an expensive operation and we want the previous state change to take full
        // effect first
        100,
      );
    }
  }

  scrollToFocusValue = () => {
    const { current } = this.getElementsArroundCurrentFocus();
    if (current) {
      this.scrollToEntry(current);
    }
  }

  moveFocusTop = () => {
    const firstElem = this.filteredList && this.filteredList[0];
    if (firstElem) {
      this.scrollToEntry(firstElem);
    }
  }

  moveFocusUp = () => {
    const { previous } = this.getElementsArroundCurrentFocus();
    if (previous) {
      this.scrollToEntry(previous);
    }
  }

  moveFocusDown = () => {
    const { next } = this.getElementsArroundCurrentFocus();
    if (next) {
      this.scrollToEntry(next);
    }
  }

  listEntryClicked = (entry) => {
    this.props.listEntryClicked(entry);
    this.setState({
      currentFocusValue: entry.value,
    });
  }

  enterPressed = () => {
    const { current } = this.getElementsArroundCurrentFocus();
    if (current) {
      this.listEntryClicked(current);
    }
  }

  render = () => {
    const { options, filter } = this.props;

    this.updateFilteredList(options, filter);
    return this.filteredList.map(entry => (
      <Option
        innerRef={ref => this.setOptionRefAt(entry, ref)}
        id={entry.value}
        value={entry.value}
        isFocusOption={entry.value === this.state.currentFocusValue}
        key={entry.value}
        className="item"
        onMouseDown={() => {
          this.listEntryClicked(entry);
        }}
      >
        {entry.image &&
          <div className="imgCountry">
            {entry.image}
          </div>
        }

        <ItemName className="ItemName">{entry.label}</ItemName>
        {entry.rightPulledLabel &&
          entry.rightPulledLabel
        }
      </Option>
    ));
  };
}

FilteredItemsList.propTypes = {
  options: PropTypes.shape({}).isRequired,
  filter: PropTypes.string.isRequired,
  listEntryClicked: PropTypes.func.isRequired,
};
