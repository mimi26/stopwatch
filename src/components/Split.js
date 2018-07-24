import React, { Component } from 'react';

class Split extends Component {
    render() {
        const { time } = this.props;
        return (
            <div>
                {time}
            </div>
        );
    }
}

export default Split;