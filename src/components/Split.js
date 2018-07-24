import React, { Component } from 'react';

class Split extends Component {
    render() {
        const { time, handleSplitClick } = this.props;
        return (
            <div onClick={() => handleSplitClick(time)}>
                {time}
            </div>
        );
    }
}

export default Split;