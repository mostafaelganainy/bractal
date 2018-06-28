import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const renderIconLinkItem = (itemInfo) => {
  const {
    iconImageSrc,
    iconRenderer,
    label,
    targetURL,
  } = itemInfo;

  return (
    <Menu.Item>
      <Link href={targetURL} to={targetURL}>
        { iconImageSrc ? <Image src={iconImageSrc} srcSet={iconImageSrc} /> : null }
        { iconRenderer }
        { label }
      </Link>
    </Menu.Item>
  );
};

const TopNavMenuItem = ({ itemInfo }) => (
  <React.Fragment>
    { itemInfo.iconRenderer == null
      ? renderIconLinkItem(itemInfo)
      : itemInfo.iconRenderer
    }
  </React.Fragment>
);

TopNavMenuItem.ItemInfoPropTypes = {
  iconImageSrc: PropTypes.string,
  iconRenderer: PropTypes.element,
  targetURL: PropTypes.string,
  label: PropTypes.string,
  dropdownContent: PropTypes.element,
};

TopNavMenuItem.propTypes = PropTypes.shape({
  itemInfo: PropTypes.shape({
    ...TopNavMenuItem.ItemInfoPropTypes,
  }).isRequired,
}).isRequired;

export default TopNavMenuItem;
