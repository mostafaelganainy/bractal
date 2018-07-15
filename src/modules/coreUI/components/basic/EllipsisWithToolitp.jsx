import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tooltip from './Tooltip';

const EllipsisContainer = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;

  border-bottom: ${props => (props.overflow ? 'dotted 1px' : null)};

  &:hover .tooltip {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

const PositionedParent = styled.div`
  position: relative;
`;

class EllipisWithTooltip extends React.Component {
  state = {
    hasOverflow: false,
  };

  componentDidMount = () => (
    this.setState({
      hasOverflow: this.checkOverflow(),
      innerText: this.getInnerText(),
    })
  )

  componentDidUpdate = () => {
    if (this.state.hasOverflow !== this.checkOverflow()
        || this.state.innerText !== this.getInnerText()) {
      this.setState({
        hasOverflow: this.checkOverflow(),
        innerText: this.getInnerText(),
      });
    }
  }

  getInnerText = () => (
    this.rootElement
      ? this.rootElement.textContent
      : null
  );

  checkOverflow = () => (
    this.rootElement
      ? this.rootElement.scrollWidth > this.rootElement.clientWidth
      : false
  );

  render() {
    const { color, children } = this.props;
    const { hasOverflow, innerText } = this.state;

    return (
      <PositionedParent>
        <EllipsisContainer
          overflow={hasOverflow}
          innerRef={(ref) => { this.rootElement = ref; }}
          onMouseEnter={this.updateOverflow}
        >
          {children}
          {innerText && innerText.trim().length > 0 &&
            <Tooltip hidden color={color}>
              {children}
            </Tooltip>
          }
        </EllipsisContainer>
      </PositionedParent>
    );
  }
}

EllipisWithTooltip.propTypes = PropTypes.shape({
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
}).isRequired;

EllipisWithTooltip.defaultTypes = {
  color: '#555',
};

export default EllipisWithTooltip;
