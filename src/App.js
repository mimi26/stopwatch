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
      split: [],
      newSplit: []
    }
    this.handleStop = this.handleStop.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.addSplit = this.addSplit.bind(this);
    this.handleSplitClick = this.handleSplitClick.bind(this);
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

  handleSplitClick(time) {
    console.log(this.state.split.indexOf(time));
    const index = this.state.split.indexOf(time);
    console.log('length:', this.state.split.length);
    this.setState(prevState => ({
      split: [...prevState.split.slice(0, index + 1)],
      display: time
    }));
  }
  
  render() {
    const { display, started, split } = this.state;
    return (
      <div>
        <Display display={display} startWatch={started ? this.addSplit : this.startWatch} />
        <Reset handleStop={this.handleStop} />   
        {split ? split.map(time => {
                        return (
                          <Split  key={time} 
                                  time={time} 
                                  handleSplitClick={this.handleSplitClick} />
                        )}) : null}  
      </div>
    );
  }
}

export default App;
