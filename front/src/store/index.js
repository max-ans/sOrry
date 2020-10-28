import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import carousel from 'src/middlewares/carouselMiddleware';
import connection from 'src/middlewares/connectionMiddleware';
import profilPage from 'src/middlewares/profilPageMiddleware';
import registration from 'src/middlewares/registrationMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    carousel,
    connection,
    profilPage,
    registration,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
