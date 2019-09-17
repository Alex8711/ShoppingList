import axios from "axios";
//action types
export const GET_ITEMS = "GET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

//action creators
export function getItems() {
  return function(dispatch) {
    return axios.get("/routes/api/items").then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    });
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export function addItem(item) {
  return function(dispatch) {
    return axios.post("/routes/api/items", item).then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    });
  };
}
