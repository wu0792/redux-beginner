const incVal = (state) => {
    return {displayVal: state + 1};
};

const decVal = (state) => {
    return {displayVal: state - 1};
};

//此处的state只会是 root state 的对应属性 state.val
const operVal = (state = {displayVal: 100}, action) => {
    switch(action.type){
        case 'INC':
            return incVal(state.displayVal);
        case 'DEC':
            return decVal(state.displayVal);
        default:
            return state;
            //throw new Error(`unknown action.type:${action.type}`);
    }
}

export default operVal