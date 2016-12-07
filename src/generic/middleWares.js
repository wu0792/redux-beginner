import {applyMiddleWares} from 'redux'

let middleWares = [];

//这里根据需要添加中间件
if(process.env.NODE_ENV === 'development'){
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middleWares.push(logger);
}

export default middleWares;