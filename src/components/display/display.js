import React from 'react';

import Form from '../form/form';

export default class Display extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Name: {this.props.name}</div>
        <div># of Updates: {this.props.count}</div>
        <Form updateName={this.props.updateName} />
      </React.Fragment>
    );
  }
}
