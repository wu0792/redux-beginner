import React, { Component } from 'react';

class Counter extends Component {
    render() {
        let {val, onClickInc, onClickDec} = this.props;
        return (
            <div>
                value:
                <button onClick={onClickDec}>-</button>
                {val.displayVal}
                <button onClick={onClickInc}>+</button>
            </div>
        );
    }
}

export default Counter;