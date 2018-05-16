// import {FETCH_USER_SUCCESS, FETCHING_USER, FETCH_USER_FAILED} from '../constants';
import { LOAD_USER_FULFILLED, LOAD_USER_PENDING, LOAD_USER_REJECTED } from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  user: {}
}

const user = (state = initialState, action = {}) => {
  // switch(action.type) {
  //   case FETCH_USER_SUCCESS:
  //     return {
  //       isFetching: false,
  //       error: null,
  //       user: action.userInfo 
  //     }
  //   case FETCHING_USER:
  //     return {
  //       isFetching: true
  //     };
  //   case FETCH_USER_FAILED:
  //     return {
  //       isFetching: false,
  //       error: action.error,
  //       user: {}
  //     }
  //   default: return state;
  // }
  switch (action.type) {
    case LOAD_USER_FULFILLED: {
      // console.log(action);
      return {
        isFetching: false,
        error: null,
        user: action.payload.data.results[0]
      };
    }
    case LOAD_USER_PENDING: {
      return {
        isFetching: true
      };
    }
    case LOAD_USER_REJECTED: {
      // console.log(action);
      return {
        isFetching: false,
        error: action.type,
        user: {}
      }
    }
    default:
      return state;
  }
};

export default user;