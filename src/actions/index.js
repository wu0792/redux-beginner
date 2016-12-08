import {INC_CALC_VAL,DEC_CALC_VAL,ADD_COUNTER,REMOVE_COUNTER} from '../generic/actionTypes'

//增加或减少计数器的值
export const incCalcVal = ({
    type: INC_CALC_VAL,
    id:id
});

export const decCalcVal = ({
    type: DEC_CALC_VAL,
    id:id
});


//添加或移除计数器
export const addCounter = () => ({
    type: ADD_COUNTER
});

export const removeCounter = () => ({
    type: REMOVE_COUNTER
});