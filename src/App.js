import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import { increment, decrement } from "./actions";
import * as actionTypes from './actions';
import {bindActionCreators} from 'redux';

import User from './components/User';

const mapStateToProps = state => {
  // console.log(state);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionTypes, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)

class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    // this.props 里有一个 dispatch 函数
    // console.log(this.props);

    // connect() 没传 mapDispatchToProps 方法时组件通过 this.props.dispatch 方法取到 dispatch 方法
    // 方法 1
    // const {dispatch} = this.props;

    const {increment, decrement} = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment('abc')} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement('efg')} className="btn btn-danger mr-2">Decrease</button>
        </p>
        <User />
      </div>
    )
  }
    // redux 写法
    /* return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.props.onDecrement} className="btn btn-danger mr-2">Decrease</button>
        </p>
      </div>
    ); */

    // 通过 context 获取 store
/*     return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.context.store.getState()}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.props.onDecrement} className="btn btn-danger mr-2">Decrease</button>
        </p>
      </div>
    ) */
}

// 通过上下文读取 store
/* App.contextTypes = {
  store:PropTypes.object
}; */

// 此处的 state 即用 store.getState() 的到的值


/* App.propTypes = {
  counter: PropTypes.number.isRequired
}; */

/* App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}; */

// 方法 2
/* const mapDispatchToProps = dispatch => {
  return {
    increment: (name) => {dispatch(increment(name))}
  }
} */

// 方法 3
/* const mapDispatchToProps = dispatch => {
  return {
    increment: bindActionCreators(increment, dispatch)
  };
  //这样写也可以
  // return bindActionCreators({increment}, dispatch); 
}; */

// 批量导入所有 action

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, {increment, decrement})(App);

/* App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}; */

export default App;