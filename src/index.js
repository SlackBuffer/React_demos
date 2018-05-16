import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/configureStore';

// import {increment, decrement} from './actions';

/* const logger = store => next => action => {
  console.log('dispatching', action);
  // 调用下一个中间件
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

const error = store => next => action => {
  try {
    next(action);
  } catch(e) {
    console.log('error' + e);
  }
}; */

/* 
dispatching {type: "INCREMENT"}
index.js:23 errorError: error in INCREMENT
index.js:15 next state {counter: 1, user: "abc"} */

/* const logger = function() {
  return function(next) {
    return function(action) {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
}; */

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
}

registerServiceWorker();

// store.subscribe(() => console.log('state updated', store.getState()));

// Redux 的写法
/* const render = () => {
  ReactDOM.render(
    <App 
      value={store.getState()} 
      onIncrement={ () => store.dispatch(increment())}
      onDecrement={ () => store.dispatch(decrement())}
    />, 
    document.getElementById('root')
  );
}

render();

// 看这里
store.subscribe(render); */
