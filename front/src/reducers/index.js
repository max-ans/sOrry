import { combineReducers } from 'redux';
import headerReducer from 'src/reducers/header';
import carouselReducer from 'src/reducers/carousel';
import connectionReducer from 'src/reducers/connection';

const mainReducer = combineReducers({
  header: headerReducer,
  carousel: carouselReducer,
  connection: connectionReducer,
});

export default mainReducer;
