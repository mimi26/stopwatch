import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div onClick={this.props.startWatch}>
                {this.props.display}
            </div>
        );
    }
}

export default Display;