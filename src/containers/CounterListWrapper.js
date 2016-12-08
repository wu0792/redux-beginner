import {connect} from 'react-redux'
import CounterList from '../components/CounterList'
import {incCalcVal,decCalcVal} from '../actions'

//定义容器组件的属性
const mapStateToProps = (state) => ({
    calcVal: state.calcVal,
    count: state.calcVal.length     //可以理解成只读属性
})

const mapDispatchToProps = ({
    onClickInc: incCalcVal,
    onClickDec: decCalcVal
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(CounterList);
export default CounterWrapper;