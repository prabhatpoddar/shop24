import axios from "axios";
import * as types from "./actionType";
//get tasks

const getProductAdmin = (parem) => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
  return axios
    .get(`https://scary-fly-gilet.cyclic.app/${parem}`)
    .then((r) => {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_USERS_FAILURE });
    });
};

//add task

const addProductAdmin = (parem,payload) => (dispatch) => {
  dispatch({ type: types.ADD_USERS_REQUEST });
  return axios
    .post(
      `https://scary-fly-gilet.cyclic.app/${parem}`,
      payload
    )
    .then((r) => {
      dispatch({ type: types.ADD_USERS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.ADD_USERS_FAILURE });
    });
};

//update task

const updateProductAdmin = (parem,id,payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_USERS_REQUEST });
  return axios
    .patch(
      `https://scary-fly-gilet.cyclic.app/${parem}/${id}`,payload
    )
    .then((r) => {
      dispatch({
        type: types.UPDATE_USERS_SUCCESS,
        payload:r.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_USERS_FAILURE });
    });
};
//delete task






const deleteProductAdmin = (parem,id) => (dispatch) => {
  dispatch({ type: types.DELETE_USERS_REQUEST});
  return axios
    .delete(
      `https://scary-fly-gilet.cyclic.app/${parem}/${id}`
    )
    .then((r) => {
      dispatch({ type: types.DELETE_USERS_SUCCESS});
    })
    .catch((e) => {
      dispatch({type: types.DELETE_USERS_FAILURE});
    });
};

export { getProductAdmin, addProductAdmin, updateProductAdmin, deleteProductAdmin };
