import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {incVal,decVal} from '../actions'

//这就是默认采用的映射机制
const mapStateToProps = (state) => state;

const mapDispatchToProps = ({
    onClickInc: incVal,
    onClickDec: decVal
})

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterWrapper