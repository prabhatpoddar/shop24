import axios from "axios";
import { publicRequest } from "../../requestMethod";
import * as types from "./actionType";
//get tasks

const LoginRedux = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
  return  publicRequest.post("auth/login",payload)
    .then((r) => {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_USERS_FAILURE });
    });
};

//add task

const SignupRedux = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USERS_REQUEST });
  return publicRequest.post("auth/signup",payload)
    .then((r) => {
      dispatch({ type: types.ADD_USERS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.ADD_USERS_FAILURE });
    });
};






export { LoginRedux, SignupRedux};
