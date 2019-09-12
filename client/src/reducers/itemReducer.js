import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/actionItem";
import uuid from "uuid";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" }
  ]
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { items: state.items };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        items: [...state.items, { id: uuid(), name: action.payload }]
      };
    default:
      return state;
  }
}

export default itemReducer;
