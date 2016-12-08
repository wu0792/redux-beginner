import React, { Component } from 'react';
import Counter from './Counter'
import counterIdGen from '../generic/counterIdGen'

class CounterList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let counterList = this.getCounterList();
        return (
            <div>
                {counterList}
            </div>);
    }

    getCounterList() {
        let counterList = [];
        let {calcVal, onClickDec, onClickInc} = this.props;
        let count = this.props.calcVal.length;

        for (let i = 0; i < count; i++) {
            const theCalcVal = calcVal[i];
            const id = theCalcVal.id;
            const val = theCalcVal.val;
            //手动创建React对象，指定类型和初始化属性
            let counter = React.createElement(Counter, {id: id,min: i, onClickDec: onClickDec,onClickInc:onClickInc, key: i, val: val });
            counterList.push(counter);
        }
        
        return counterList;
    }
}

export default CounterList;