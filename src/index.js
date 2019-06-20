import React from 'react';
import ReactDOM from 'react-dom';

import Display from './components/display/display';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.count = 0;
    this.state.name = '';
  }

  updateName = (name) => {
    this.setState({
      name,
      count: this.state.count + 1,
    });
  };

  updateState = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    this.setState({ [property]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.updateName(event.target.nameInput.value);
  };

  render() {
    return (
      <React.Fragment>
        <Display
          name={this.state.name}
          count={this.state.count}
        />
        <Form
          updateName={this.updateName}
          updateState={this.updateState}
          submitHandler={this.submitHandler}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
