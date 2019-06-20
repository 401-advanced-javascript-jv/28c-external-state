import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.updateName(event.target.name);
  };

  updateState = (event) => {
    const name = event.target.name;
    this.setState({name});
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" onChange={this.updateState} name="name" />
      </form>
    );
  }
}
