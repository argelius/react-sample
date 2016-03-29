import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleClick.bind(this)}>Click me!</button>
        </p>
        <p>
          You have clicked {this.state.clicks} times!
        </p>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
