import React from 'react'
import ReactDOM from 'react-dom'

import App from 'modules/App'

import 'milligram/dist/milligram.min.css'
import 'styles/default.scss'

if (process.env.NODE_ENV === 'production' && location.protocol === 'http:') {
  location.href = 'https://colus001.github.io'
}

ReactDOM.render(
  <App />, document.getElementById('root'),
)
