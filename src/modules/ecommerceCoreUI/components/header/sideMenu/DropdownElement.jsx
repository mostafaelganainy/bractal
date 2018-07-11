import React from 'react';
import { Accordion } from 'semantic-ui-react';


const AccountContent = (
  <div>
    <ul>
      <li key="1">My profile</li>
      <li key="2">My orders</li>
      <li key="3">Shopping card</li>
      <li key="4">Recent viewed</li>
      <li key="5">Notifications and messages</li>
      <li key="6">Wishlist</li>
      <li key="7">Smart cart</li>
      <li key="8">Following</li>
      <li key="9">My points and loyalty program</li>
      <li key="10">My coupons and promo codes</li>
      <li key="11">Settings</li>
      <li key="12">Invite friends</li>
      <li key="13">Customer services</li>
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
  { key: 'panel-4a', title: 'Category 1', content: { content: Level5Content, key: 'panel-4a:content' } },
  { key: 'panel-4b', title: 'Category 2', content: { content: Level5Content, key: 'panel-4b:content' } },
];

const Level4Content = (
  <div>
    <Accordion.Accordion panels={level4Panels} />
  </div>
);

const level3Panels = [
  { key: 'panel-3a', title: 'Sub department #1', content: { content: Level4Content, key: 'panel-3a:content' } },
  { key: 'panel-3b', title: 'Sub department #2', content: { content: Level4Content, key: 'panel-3b:content' } },
];

const Level3Content = (
  <div>
    <Accordion.Accordion panels={level3Panels} />
  </div>
);

const level2Panels = [
  { key: 'panel-2a', title: 'Department #1', content: { content: Level3Content, key: 'panel-2a:content' } },
  { key: 'panel-2b', title: 'Department #2', content: { content: Level3Content, key: 'panel-2b:content' } },
];

const Level2Content = (
  <div>
    <Accordion.Accordion panels={level2Panels} />
  </div>
);

const rootPanels = [
  { key: 'panel-1', title: 'My account', content: { content: AccountContent, key: 'panel-1:content' } },
  { key: 'panel-2', title: 'Tracks', content: { content: TracksContent, key: 'panel-2:content' } },
  { key: 'panel-3', title: 'Departments', content: { content: Level2Content, key: 'panel-3:content' } },
];

const DropdownElement = () => <Accordion defaultActiveIndex={0} panels={rootPanels} inverted />;

export default DropdownElement;
