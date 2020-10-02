// import combinereducers method from redux for combine many reducers
import { combineReducers } from 'redux';
import headerReducer from './header';

const mainreducer = combineReducers({
  header: headerReducer,
});

export default mainreducer;
