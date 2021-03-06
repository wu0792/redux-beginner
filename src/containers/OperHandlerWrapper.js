import {connect} from 'react-redux'
import OperHandler from '../components/OperHandler'
import {addCounter,removeCounter} from '../actions'

const mapStateToProps = (state) => ({
    count: state.calcVal.length,
    removeBtnEnable: state.calcVal.length > 0   //可以理解成只读属性
})

const mapDispatchToProps = ({
    onClickAddCounter: addCounter,
    onClickRemoveCounter: removeCounter
})

const OperHandlerWrapper = connect(mapStateToProps, mapDispatchToProps)(OperHandler)
export default OperHandlerWrapper