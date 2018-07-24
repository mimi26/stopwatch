import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Reset from './components/Reset';
import Split from './components/Split';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      started: false,
      split: []
    }
    this.handleStop = this.handleStop.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.addSplit = this.addSplit.bind(this);
  }

  startWatch() {
    this.start = setInterval(() => {
      this.setState(prevState => ({ display: prevState.display + 1 }));
    }, 10);
    this.setState({ started: true });
  }

  handleStop() {
    clearInterval(this.start);
  }

  addSplit() {
    this.setState(prevState => ({ split: [...prevState.split, this.state.display] }));
  }
  
  render() {
    const { display, started, split } = this.state;
    return (
      <div>
        <Display display={display} startWatch={started ? this.addSplit : this.startWatch} />
        <Reset handleStop={this.handleStop} />   
        {split ? split.map(time => (<Split key={time} time={time} />)) : null}  
      </div>
    );
  }
}

export default App;
