import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <input type="text" onChange={this.props.updateState} name="nameInput" />
        <button>Submit</button>
      </form>
    );
  }
}
