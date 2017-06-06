/* eslint {
  no-underscore-dangle: 0,
}*/

import { each } from 'lodash'

import configureStore from 'redux/configureStore'

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

export default store
