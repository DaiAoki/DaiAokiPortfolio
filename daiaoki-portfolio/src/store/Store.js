import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware }from 'react-router-redux'

export default function Store(history) {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      logger,
      routerMiddleware(history)
    )
  );
}
