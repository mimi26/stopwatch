import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 0
    }
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
      this.stopWatch()
  }

  stopWatch() {
  this.startWatch = setInterval(() => {
    this.setState(prevState => ({ display: prevState.display + 1 }));
  }, 10);
  }

  handleStop() {
    console.log('clicked')
    clearInterval(this.startWatch);
  }
  
  render() {
    const { display } = this.state;
    return (
      <div onClick={this.handleStop}>
      {display}
        
      </div>
    );
  }
}

export default App;
