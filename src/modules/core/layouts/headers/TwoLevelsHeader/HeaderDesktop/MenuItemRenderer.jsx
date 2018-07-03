import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import DropdownContentTracker from './DropdownContentTracker';

// eslint-disable-next-line react/prop-types
const renderIconImage = ({ iconImageSrc, styleClass }) => (
  <Image className={styleClass} src={iconImageSrc} srcSet={iconImageSrc} />
);

const renderMenuItem = (itemInfo) => {
  const {
    iconImageSrc,
    iconRenderer,
    label,
    targetURL,
  } = itemInfo;

  return (
    <Menu.Item
      exact
      as={targetURL ? NavLink : React.Fragment}
      to={targetURL || '/'}
    >
      { iconImageSrc ? renderIconImage(itemInfo) : null }
      { iconRenderer }
      { label }
    </Menu.Item>
  );
};

const renderIconLinkItem = itemInfo => (
  <React.Fragment>
    { itemInfo.spacerWithWidth
      ? <div style={{ width: '10px' }} />
      : renderMenuItem(itemInfo)
    }
  </React.Fragment>
);

const ItemRenderer = itemInfo => (
  <React.Fragment>
    { itemInfo.iconRenderer == null
      ? renderIconLinkItem(itemInfo)
      : itemInfo.iconRenderer
    }
  </React.Fragment>
);

const MenuItemRenderer = ({ itemInfo }) => {
  const itemRenderer = ItemRenderer(itemInfo);

  return (
    <React.Fragment>
      { !itemInfo.dropdownContent
        ?
          itemRenderer
        :
          <DropdownContentTracker
            itemRenderer={itemRenderer}
            dropdownContent={itemInfo.dropdownContent}
          />
      }
    </React.Fragment>
  );
};

MenuItemRenderer.ItemInfoPropTypes = {
  spacerWithWidth: PropTypes.number,
  iconImageSrc: PropTypes.string,
  iconRenderer: PropTypes.element,
  targetURL: PropTypes.string,
  label: PropTypes.string,
  dropdownContent: PropTypes.element,
  position: PropTypes.oneOf(['right', 'left']),
  styleClass: PropTypes.string,
};

MenuItemRenderer.propTypes = PropTypes.shape({
  itemInfo: PropTypes.shape({
    ...MenuItemRenderer.ItemInfoPropTypes,
  }).isRequired,
}).isRequired;

export default MenuItemRenderer;