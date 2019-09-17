import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/actionItem";

const initialState = {
  items: []
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { items: action.payload };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

export default itemReducer;
