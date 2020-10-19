import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import carousel from 'src/middlewares/carouselMiddleware';
import connection from 'src/middlewares/connectionMiddleware';
import profilPage from 'src/middlewares/profilPageMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    carousel,
    connection,
    profilPage,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
