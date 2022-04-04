import {
  ADD_FAVORITE_ITEM_SUCCESS,
  DELETE_POST_ITEMS_SUCCESS,
  FETCH_POST_ITEMS_REQUEST,
  FETCH_DETAIL_POST_REQUEST,
} from '../actions/todo.action';

const initialState = {
  items: [],
  comments: [],
};

export const state = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case FETCH_POST_ITEMS_REQUEST:
      return {
        ...state,
        items: payload,
      };
    case FETCH_DETAIL_POST_REQUEST:
      return {
        ...state,
        comments: payload,
      };
    case DELETE_POST_ITEMS_SUCCESS:
      return {
        ...state,
        items: [],
      };
    case ADD_FAVORITE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload) {
            item.isFavorite = !item.isFavorite;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default state;
