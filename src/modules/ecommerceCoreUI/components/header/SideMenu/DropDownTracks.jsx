import React from 'react';

const DropDownTracks = () => {
  const TracksContentList = [
    { name: 'Products', icon: 'icon-products' },
    { name: 'Shops', icon: 'icon-shops' },
    { name: 'Homemade', icon: 'icon-home-made' },
    { name: 'Health Park', icon: 'icon-health' },
    { name: 'Education Park', icon: 'icon-education' },
    { name: 'Factories', icon: 'icon-factories' },
  ];
  return (
    <ul>
      {TracksContentList.map((item, index) =>
        <li key={index.id}><i className={item.icon} />{item.name}</li>)
      }
    </ul>
  );
};

export default DropDownTracks;
