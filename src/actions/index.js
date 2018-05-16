import axios from 'axios';

import {INCREMENT, DECREMENT} from '../constants';
// import {INCREMENT, DECREMENT, FETCH_USER_SUCCESS, FETCHING_USER, FETCH_USER_FAILED} from '../constants';
import {LOAD_USER} from '../constants';

export const increment = () => {
  return {
    type: INCREMENT
  };

  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: INCREMENT
  //     });
  //   }, 2000);
  // };

  // return {
  //   type: INCREMENT,
  //   payload: new Promise((resolve, reject) => {
  //     resolve('abc');
  //   })
  // };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const get_user = () => {
  // return dispatch => {
  //   dispatch(fetching_user());
  //   axios.get('https://randomuser.me/api/')
  //     .then(res => {
  //       // console.log(res);
  //       dispatch(fetch_user_ok(res.data.results[0]));
  //     })
  //     .catch(error => {
  //       // console.log(error);
  //       dispatch(fetch_user_failed(error.response.data));
  //     })
  // };

  return {
    type: LOAD_USER,
    /* payload: {
      promise: axios.get('https://randomuser.me/api/')
    }, */
    payload: axios.get('https://randomuser.me/api/')
  };
};

// export const fetch_user_ok = (userInfo) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     userInfo
//   };
// };

// export const fetching_user = () => {
//   return {
//     type: FETCHING_USER
//   };
// };

// export const fetch_user_failed = (error) => {
//   return {
//     type: FETCH_USER_FAILED,
//     error
//   };
// };