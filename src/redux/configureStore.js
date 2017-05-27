import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from 'redux/reducers'

const isBrowser = () => (typeof self === 'object')

const middlewares = [thunkMiddleware]

const composeEnhancers = isBrowser() ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middlewares)
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
  )

  return store
}

/* eslint {
  no-underscore-dangle: 0
}*/
