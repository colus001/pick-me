/* eslint {
  no-underscore-dangle: 0,
}*/

import { each } from 'lodash'
import React from 'react'
import { browserHistory as history } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from 'redux/configureStore'
import createRoutes from 'routes'

import bootstrap from './bootstrap'

const reduxState = {}
if (window.__REDUX_STATE__) {
  try {
    const plain = JSON.parse(unescape(window.__REDUX_STATE__))
    each(plain, (val, key) => { reduxState[key] = val })
  } catch (e) {
    console.warn(e) // eslint-disable-line
  }
}

const store = bootstrap(configureStore(reduxState))

const App = () => (
  <Provider store={store}>
    {createRoutes(history, store)}
  </Provider>
)

export default App
