import React from 'react';
import RelayInitializer from './';

export default function withModules(WrappedComponent) {
  return function render(props) {
    // ... and renders the wrapped component with the fresh data!
    // Notice that we pass through any additional props
    return (
      <RelayInitializer.Context.Consumer>
        {environment => (
          <WrappedComponent environment={environment} {...props} />
        )}
      </RelayInitializer.Context.Consumer>
    );
  };
}
