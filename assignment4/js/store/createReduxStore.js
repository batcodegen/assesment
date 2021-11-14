import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './index';

export default function createReduxStore() {
  const enhancer = compose(applyMiddleware(thunk));
  let store = createStore(AppReducer, enhancer);
  return store;
}
