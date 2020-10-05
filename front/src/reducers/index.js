import { combineReducers } from 'redux';
import headerReducer from 'src/reducers/header';

const mainReducer = combineReducers({
  header: headerReducer,
});

export default mainReducer;
