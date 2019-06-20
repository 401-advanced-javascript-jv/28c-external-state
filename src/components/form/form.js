import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.updateName(this.state.name);
  };

  updateState = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    this.setState({ [property]: value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" onChange={this.updateState} name="name" />
        <button>Submit</button>
      </form>
    );
  }
}
