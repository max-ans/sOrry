import { combineReducers } from 'redux';
import headerReducer from 'src/reducers/header';
import carouselReducer from 'src/reducers/carousel';

const mainReducer = combineReducers({
  header: headerReducer,
  carousel: carouselReducer,
});

export default mainReducer;
