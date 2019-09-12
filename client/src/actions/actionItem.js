//action types
export const GET_ITEMS = "GET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

//action creators
export function getItems() {
  return {
    type: GET_ITEMS
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export function addItem(value) {
  return {
    type: ADD_ITEM,
    payload: value
  };
}
