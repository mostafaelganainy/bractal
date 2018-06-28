import React from 'react';
import DesktopMenu from './DesktopMenu';
import PageContent from '../content/AllLoadedModulesContent';

export default function Layout() {
  return (
    <React.Fragment>
      <DesktopMenu />
      <PageContent />
    </React.Fragment>
  );
}
