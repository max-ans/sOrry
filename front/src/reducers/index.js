import { combineReducers } from 'redux';
import headerReducer from 'src/reducers/header';
import carouselReducer from 'src/reducers/carousel';
import connectionReducer from 'src/reducers/connection';
import profilPageReducer from 'src/reducers/profilPage';
import registrationReducer from 'src/reducers/registration';
import contactReducer from 'src/reducers/contact';
import apologyCreateReducer from 'src/reducers/apologyCreate';
import categoriesReducer from 'src/reducers/categories';
import apologyByCategoriesReducer from 'src/reducers/apologyByCategories';
import apologyReducer from 'src/reducers/apology';
import apologyEditReducer from 'src/reducers/apologyEdit';

const mainReducer = combineReducers({
  header: headerReducer,
  carousel: carouselReducer,
  connection: connectionReducer,
  registration: registrationReducer,
  user: profilPageReducer,
  contact: contactReducer,
  apologyCreate: apologyCreateReducer,
  categories: categoriesReducer,
  apologyByCategories: apologyByCategoriesReducer,
  apology: apologyReducer,
  apologyEdit: apologyEditReducer,
});

export default mainReducer;
