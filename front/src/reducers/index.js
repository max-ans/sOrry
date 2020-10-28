import { combineReducers } from 'redux';
import headerReducer from 'src/reducers/header';
import carouselReducer from 'src/reducers/carousel';
import connectionReducer from 'src/reducers/connection';
import profilPageReducer from 'src/reducers/profilPage';
import registrationReducer from 'src/reducers/registration';

const mainReducer = combineReducers({
  header: headerReducer,
  carousel: carouselReducer,
  connection: connectionReducer,
  registration: registrationReducer,
  user: profilPageReducer,
});

export default mainReducer;
