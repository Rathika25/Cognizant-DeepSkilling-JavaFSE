import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  sayHello = () => {
    alert('Hello! Member1');
  }

  handleIncrement = () => {
    this.incrementCounter();
    this.sayHello();
  }

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  sayWelcome = (msg) => {
    alert(msg);
  }

  handleOnPress = (e) => {
    alert('I was clicked');
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div>
          <div>
            <button onClick={this.handleIncrement}>Increment</button>
          </div>
          <div>
            <button onClick={this.handleDecrement}>Decrement</button>
          </div>
          <div>
            <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
          </div>
          <div>
            <button onClick={this.handleOnPress}>Click on me</button>
          </div>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;