import React, { Component } from 'react';

class Reset extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleStop}>Reset Stopwatch</button>
            </div>
        );
    }
}

export default Reset;