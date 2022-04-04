import {createAction} from 'redux-actions';
import {getAllPostItems, getDetailPost} from '../../api/Posts';
import {hideSpinner, showSpinner} from './spinner.action';

export const FETCH_POST_ITEMS_REQUEST = 'FETCH_POST_ITEMS_REQUEST';
export const DELETE_POST_ITEMS_SUCCESS = 'DELETE_POST_ITEMS_SUCCESS';
export const ADD_FAVORITE_ITEM_SUCCESS = 'ADD_FAVORITE_ITEM_SUCCESS';
export const FETCH_DETAIL_POST_REQUEST = 'FETCH_DETAIL_POST_REQUEST';

export const fetchPostItemsSuccess = createAction(FETCH_POST_ITEMS_REQUEST);
export const deletePostItemsSuccess = createAction(DELETE_POST_ITEMS_SUCCESS);
export const addFavoritesItemsSuccess = createAction(ADD_FAVORITE_ITEM_SUCCESS);
export const fetchDetailPostSuccess = createAction(FETCH_DETAIL_POST_REQUEST);

export const deletePostItems = () => async dispatch => {
  try {
    dispatch(deletePostItemsSuccess());
  } catch (error) {
    console.log('unable to detele all items');
  }
};

export const addPostItem = item => async dispatch => {
  try {
    dispatch(addFavoritesItemsSuccess(item));
  } catch (error) {
    console.log('unable to add post item');
  }
};

export const fetchPostItems = () => async dispatch => {
  try {
    dispatch(showSpinner());
    const {data} = await getAllPostItems();
    dispatch(fetchPostItemsSuccess(data));
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(hideSpinner());
  }
};

export const fetchDetailPost = id => async dispatch => {
  try {
    dispatch(showSpinner());
    const {data} = await getDetailPost({id});
    console.log(data)
    dispatch(fetchDetailPostSuccess(data));
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(hideSpinner());
  }
};
