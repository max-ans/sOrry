import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import carousel from 'src/middlewares/carouselMiddleware';
import connection from 'src/middlewares/connectionMiddleware';
import profilPage from 'src/middlewares/profilPageMiddleware';
import registration from 'src/middlewares/registrationMiddleware';
import contact from 'src/middlewares/contactMiddleware';
import apologyCreateMiddleware from 'src/middlewares/apologyCreateMiddleware';
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware';
import apologyByCategoriesMiddleware from 'src/middlewares/apologyByCategoriesMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    carousel,
    connection,
    profilPage,
    registration,
    contact,
    apologyCreateMiddleware,
    categoriesMiddleware,
    apologyByCategoriesMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
