import React, { Component } from 'react';

class OperHandler extends Component {
    render() {
        let {count, onClickAddCounter, onClickRemoveCounter} = this.props;
        return (
            <div>
                <button onClick={onClickRemoveCounter}>REMOVE</button>
                <button onClick={onClickAddCounter}>ADD</button>
                <label>{count}</label>
            </div>
        );
    }
}

//添加属性校验
//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
OperHandler.propTypes = {
    onClickRemoveCounter: React.PropTypes.func.isRequired,
    onClickAddCounter: React.PropTypes.func.isRequired
};

export default OperHandler;