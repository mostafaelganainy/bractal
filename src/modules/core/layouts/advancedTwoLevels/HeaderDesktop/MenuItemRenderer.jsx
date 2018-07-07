/* eslint-disable no-else-return, indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ValidateAndResolve from '~/modules/core/utils/jsHelpers/ValidateAndResolve';
import VerticalSeparator from '~/modules/coreUI/components/layouts/helpers/VerticalSeparator';
import { Spacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import DropdownContentTracker from './DropdownContentTracker';

const renderMenuItem = (itemInfo) => {
  const {
    targetURL, linkLabelText, itemRenderer, iconImageSrc, dropdownContent,
  } = itemInfo;

  let content = null;

  if (linkLabelText) {
    content = <span>{linkLabelText}</span>;
  } else if (iconImageSrc) {
    content = <Image src={iconImageSrc} srcSet={iconImageSrc} />;
  } else if (itemRenderer) {
    content = itemRenderer;
  }

  let menuItem = null;

  if (targetURL) {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    menuItem = <Link to={targetURL}> { content } </Link>;
  } else {
    menuItem = <div> { content } </div>;
  }

  if (dropdownContent) {
    return (
      <DropdownContentTracker
        itemRenderer={menuItem}
        dropdownContent={dropdownContent}
      />
    );
  } else {
    return menuItem;
  }
};

const renderVerticalSeparator = itemInfo => (
  <VerticalSeparator
    spacerWidth={itemInfo.spacerWidth}
    separatorLength={itemInfo.separatorLength}
    separatorWeight={itemInfo.separatorWeight}
  />
);

const renderHorizontalSpacer = itemInfo => (
  <Spacer spacerSize={itemInfo.spacerWidth || 'xxLarge'} >
    hello
  </Spacer>
);

const MenuItemRenderer = ({ itemInfo }) =>
  ValidateAndResolve
    .with(itemInfo)
      .if_hasAnyOf(['verticalSeparator', 'horizontalSpacer'])
        .thenProhibitAllOf([
          'linkLabelText', 'iconImageSrc', 'itemRenderer', 'targetURL', 'dropdownContent',
        ])
      .and_if_hasAnyOf(['linkLabelText', 'iconImageSrc', 'itemRenderer'])
        .thenRequireOneOf([
          'targetURL', 'dropdownContent',
        ])
        .andProhibitAllOf([
          'spacerSize', 'separatorWeight', 'separatorLength',
        ])
      .and_if_hasAnyOf(['horizontalSpacer'])
        .thenProhibitAllOf([
          'separatorWeight', 'separatorLength',
        ])
    .then()
      .if_has('verticalSeparator')
        .resolveWith(renderVerticalSeparator(itemInfo))

      .else_if_has('horizontalSpacer')
        .resolveWith(renderHorizontalSpacer(itemInfo))

      .else()
        .resolveWith(renderMenuItem(itemInfo))

      .end();

MenuItemRenderer.ItemInfoPropTypes = {
  linkLabelText: PropTypes.string,
  horizontalSpacer: PropTypes.bool,
  verticalSeparator: PropTypes.bool,
  iconImageSrc: PropTypes.string,
  itemRenderer: PropTypes.element,
  targetURL: PropTypes.string,
  dropdownContent: PropTypes.element,
  position: PropTypes.oneOf(['right', 'left']),
  styleClass: PropTypes.string,
  spacerWidth: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']),
  separatorWeight: PropTypes.oneOf(['thin', 'normal', 'thick']),
  separatorLength: PropTypes.oneOf(['shorn', 'normal', 'full']),
};

MenuItemRenderer.propTypes = PropTypes.shape({
  itemInfo: PropTypes.shape({
    ...MenuItemRenderer.ItemInfoPropTypes,
  }).isRequired,
}).isRequired;

export default MenuItemRenderer;
