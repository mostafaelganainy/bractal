import React, {Component} from 'react';

export default class Loader extends Component {
  render () {
    return (
      <div className="LoaderCont">
        <div className="lds-default">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <p>Verifying your credentials</p>
      </div>
    );
  }
}
