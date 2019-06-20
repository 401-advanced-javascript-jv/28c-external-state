import React from 'react';
import ReactDOM from 'react-dom';

import Display from './components/display/display';

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
        <Display
          name={this.state.name}
          count={this.state.count}
          updateName={this.updateName}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
