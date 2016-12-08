import React, { Component } from 'react';

class Counter extends Component {
    render() {
        let {val} = this.props;
        return (
            <div>
                value:
                <button onClick={this.handleDecClick.bind(this)}>-</button>
                {val}
                <button onClick={this.handleIncClick.bind(this)}>+</button>
            </div>
        );
    }

    handleDecClick(){
        let {id, onClickDec} = this.props;
        onClickDec(id);
    }

    handleIncClick(){
        let {id, onClickInc} = this.props;
        onClickInc(id);
    }
}

Counter.propTypes = {
    id: React.PropTypes.number.isRequired,
    onClickDec: React.PropTypes.func.isRequired,
    onClickInc: React.PropTypes.func.isRequired,
    val: React.PropTypes.number.isRequired
};

export default Counter;