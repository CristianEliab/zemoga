import {combineReducers} from 'redux';
import spinner from './spinner.reducer';
import state from './todo.reducer';

//insert another reducers here to be combined

const reducers = combineReducers({
  spinner,
  state,
});

export default reducers;
