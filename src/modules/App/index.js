import React from 'react'
import { browserHistory as history } from 'react-router-dom'
import { Provider } from 'react-redux'

import createRoutes from 'routes'
import store from 'redux/store'

const App = () => (
  <Provider store={store}>
    {createRoutes(history, store)}
  </Provider>
)

export default App
