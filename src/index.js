import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import middleWares from './generic/middleWares';

let store = createStore(
  reducers,
  applyMiddleware(...middleWares)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
