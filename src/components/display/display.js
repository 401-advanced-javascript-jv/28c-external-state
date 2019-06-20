import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Name: {this.props.name}</div>
        <div># of Updates: {this.props.count}</div>
      </React.Fragment>
    );
  }
}
