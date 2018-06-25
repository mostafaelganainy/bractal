import React from 'react';
import DesktopMenu from './DesktopMenu';
import PageContent from './PageContent';

export default function Layout() {
  return (
    <React.Fragment>
      <DesktopMenu />
      <PageContent />
    </React.Fragment>
  );
}
