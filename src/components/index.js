import {INC_CALC_VAL,DEC_CALC_VAL,ADD_COUNTER,REMOVE_COUNTER} from '../generic/actionTypes'

//增加或减少计数器的值
export const incCalcVal = (action) => ({
    type: INC_CALC_VAL
});

export const decCalcVal = (action) => ({
    type: DEC_CALC_VAL
});


//添加或移除计数器
export const addCounter = (action) => ({
    type: ADD_COUNTER
});

export const removeCounter = (action) => ({
    type: REMOVE_COUNTER
});