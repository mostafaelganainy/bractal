import React from 'react';
import RelayInitializer from './RelayInitializer';

export default function withModules(WrappedComponent) {
  return function render(props) {
    return (
      <RelayInitializer.Context.Consumer>
        {environment => (
          <WrappedComponent environment={environment} {...props} />
        )}
      </RelayInitializer.Context.Consumer>
    );
  };
}
