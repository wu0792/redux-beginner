# 一个简单的DEMO，用redux实现

关注 ./reducers/index.js文件，使用到了 combineReducers:

* 可用来对复杂的state进行拆分管理，不同的属性名称对应不同的reducer

import val from './incAndDec'
import {combineReducers} from 'redux'
let reducers = combineReducers({val});
会对应将 state.val 传入 ./incAndDec.js 的reducer函数state参数

const operVal = (state = {displayVal: 100}, action) => {
  //...
}


* 需要关注容器组件 CounterWrapper.js ，这个组件就是将呈现组件和redux进行关联的中介，重点是 connect 方法

该方法用来将呈现组件进行包装，生成容器组件，connect方法包括两个参数：
** mapStateToProps
将reducer中对应的state属性映射到呈现组件的props，默认值是名称不变：
const mapStateToProps = (state) => state;

** mapDispatchToProps
将组件的dispatch动作映射到某个reducer

* ./src/index.js 的 Provider 用来包装整个根组件，目的是按层级依次传递store对象