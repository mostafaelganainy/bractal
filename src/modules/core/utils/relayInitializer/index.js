import React from 'react';

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

const RelayInitializer = {
  init: (endPoint) => {
    // 2
    const store = new Store(new RecordSource());
    // 3
    // eslint-disable-next-line
    const network = Network.create((operation, variables) => fetch(endPoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => response.json()));

    // 5
    return new Environment({
      network,
      store,
    });
  },
  Context: React.createContext({}),
};
// 6
export default RelayInitializer;
export { default as withRelayEnvironment } from './withRelayEnvironment';
