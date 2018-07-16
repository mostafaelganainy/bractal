import React from 'react';

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

const RelayInitializer = {
  init: (endPoint, additionalHeaders) => {
    // 2
    const store = new Store(new RecordSource());
    // 3
    // eslint-disable-next-line
    const network = Network.create((operation, variables) => fetch(endPoint, {
      method: 'POST',
      headers: {
        ...additionalHeaders,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then((response) => {
      // TODO, handle when response.ok = false
      console.log(response);
      return response.json();
    }).catch((err) => {
      console.log(err);
    }));

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
