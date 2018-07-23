import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Reset from './components/Reset';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      split: []
    }
    this.handleStop = this.handleStop.bind(this);
    this.startWatch = this.startWatch.bind(this);
  }

  startWatch() {
    this.start = setInterval(() => {
      this.setState(prevState => ({ display: prevState.display + 1 }));
    }, 10);
  }

  handleStop() {
    clearInterval(this.start);
  }
  
  render() {
    const { display } = this.state;
    return (
      <div>
        <Display display={display} startWatch={this.startWatch} />
        <Reset handleStop={this.handleStop} />     
      </div>
    );
  }
}

export default App;
