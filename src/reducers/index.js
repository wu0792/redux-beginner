import { INC_CALC_VAL, DEC_CALC_VAL, ADD_COUNTER, REMOVE_COUNTER } from '../generic/actionTypes'
import counterIdGen from '../generic/counterIdGen'

const incVal = (state, id) => {
    let newCalcVal = [];
    for(let i=0; i<state.calcVal.length;i++){
        let theCalcVal = state.calcVal[i];
        newCalcVal.push(theCalcVal);

        if(theCalcVal.id === id){
            theCalcVal.val++;            
        }
    }

    return {calcVal: newCalcVal};
};

const decVal = (state, id) => {
    let newCalcVal = [];
    for(let i=0; i<state.calcVal.length;i++){
        let theCalcVal = state.calcVal[i];
        newCalcVal.push(theCalcVal);
        if(theCalcVal.id === id){
            theCalcVal.val--;
        }
    }

    return {calcVal: newCalcVal};
};

const addCounter = (state) => {
    let calcVal = state.calcVal;
    let id = counterIdGen();
    
    calcVal.push({id: id, val: 0});
    return {calcVal: calcVal};
}

const removeCounter = (state, id) => {
    state.calcVal.splice(state.calcVal.length - 1, 1);    
    return {calcVal: state.calcVal};
}

const counterCount = (state = { count: 0, calcVal: [] }, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return addCounter(state, action.id);
        case REMOVE_COUNTER:
            return removeCounter(state, action.id);
        case INC_CALC_VAL:
            return incVal(state, action.id);
        case DEC_CALC_VAL:
            return decVal(state, action.id);
        default:
            return state;
    }
};

export default counterCount;