import {connect} from 'react-redux'
import CounterList from '../components/CounterList'
import {incCalcVal,decCalcVal} from '../actions'

//这就是默认采用的映射机制
const mapStateToProps = (state) => ({
    calcVal: state.calcVal,
    count: state.calcVal.length
})

const mapDispatchToProps = ({
    onClickInc: incCalcVal,
    onClickDec: decCalcVal
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(CounterList);
export default CounterWrapper;