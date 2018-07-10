import React from 'react';
import { Accordion } from 'semantic-ui-react';


const AccountContent = (
  <div>
    <ul>
      <li>My profile</li>
      <li>My orders</li>
      <li>Shopping card</li>
      <li>Recent viewed</li>
      <li>Notifications and messages</li>
      <li>Wishlist</li>
      <li>Smart cart</li>
      <li>Following</li>
      <li>My points and loyalty program</li>
      <li>My coupons and promo codes</li>
      <li>Settings</li>
      <li>Invite friends</li>
      <li>Customer services</li>
    </ul>
  </div>
);

const TracksContent = (
  <div>
    <ul>
      <li>Products</li>
      <li>Shops</li>
      <li>Homemade</li>
      <li>Health Park</li>
      <li>Education Park</li>
      <li>Factories</li>
    </ul>
  </div>
);

const Level5Content = (
  <div>
    <ul>
      <li>sub category</li>
    </ul>
  </div>
);

const level4Panels = [
  { key: 'panel-3a', title: 'Category', content: { content: Level5Content } },
  { key: 'panel-3b', title: 'Category', content: { content: Level5Content } },
];

const Level4Content = (
  <div>
    <Accordion.Accordion panels={level4Panels} />
  </div>
);

const level3Panels = [
  { key: 'panel-3a', title: 'Sub department #1', content: { content: Level4Content } },
  { key: 'panel-3b', title: 'Sub department #2', content: { content: Level4Content } },
];

const Level3Content = (
  <div>
    <Accordion.Accordion panels={level3Panels} />
  </div>
);

const level2Panels = [
  { key: 'panel-2a', title: 'Department #1', content: { content: Level3Content } },
  { key: 'panel-2b', title: 'Department #2', content: { content: Level3Content } },
];

const Level2Content = (
  <div>
    <Accordion.Accordion panels={level2Panels} />
  </div>
);

const rootPanels = [
  { key: 'panel-1', title: 'My account', content: { content: AccountContent } },
  { key: 'panel-2', title: 'Tracks', content: { content: TracksContent } },
  { key: 'panel-3', title: 'Departments', content: { content: Level2Content } },
];

const DropdownElement = () => <Accordion defaultActiveIndex={0} panels={rootPanels} inverted />;

export default DropdownElement;
