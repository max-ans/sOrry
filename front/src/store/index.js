import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import carousel from 'src/middlewares/carouselMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    carousel,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
