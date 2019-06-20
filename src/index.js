import React from 'react';
import ReactDOM from 'react-dom';

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

  render() {
    return (
      <React.Fragment>
        <div>Name: {this.state.name}</div>
        <div># of Updates: {this.state.count}</div>
        <Form updateName={this.updateName}/>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
