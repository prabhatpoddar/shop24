import * as types from "./actionTypes";

import axios from "axios";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};

const getProductssError = () => {
  return {
    type: types.GET_PRODUCTS_FAILURE,
  };
};

const getProductsMens = (params) => (dispatch) => {
  //console.log(name)
  dispatch(getProductsRequest());
  return axios
    .get(`https://brainy-goat-shoulder-pads.cyclic.app/tshirt`, params)
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getProductssError());
    });
};
const getProductsWomens = (name) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios
    .get(`https://brainy-goat-shoulder-pads.cyclic.app/beauty`, name)
    .then((r) => {
      console.log(r);
      dispatch(getProductsSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getProductssError());
    });
};
const getProductsKids = (name) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios
    .get(`https://brainy-goat-shoulder-pads.cyclic.app/kidswear`, name)
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getProductssError());
    });
};
// const getProductsBeuty = (name) => (dispatch) => {
//   dispatch(getProductsRequest());
//   return axios
//     .get(`https://brainy-goat-shoulder-pads.cyclic.app/beauty`)
//     .then((r) => {
//       dispatch(getProductsSuccess(r.data));

//     })
//     .catch((e) => {
//       dispatch(getProductssError());
//     });
// };

export { getProductsMens, getProductsWomens, getProductsKids };
