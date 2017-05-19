/* eslint no-console: "off" */

import Promise from 'bluebird'
import _ from 'lodash'
import qs from 'qs'
import path from 'path'
import Express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'

import { useRouterHistory, RouterContext, match } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'

import configureStore from 'redux/configureStore'
import createRoutes from 'routes'

const server = new Express()
const port = process.env.PORT || 3000
process.env.ON_SERVER = true

const externalScriptSrc = [
  'https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js?autoload=false',
]

const { scriptSrcs, styleSrc } = (() => { // eslint-disable-line
  // if (process.env.NODE_ENV === 'production') {
  //   const refManifest = require('../../rev-manifest.json')
  //
  //   const cdnUrl = process.env.TARGET_SERVER === 'staging'
  //     ? '//d2dea1388vwld0.cloudfront.net'
  //     : '//d3ul458mv1c6v4.cloudfront.net'
  //
  //   return {
  //     scriptSrcs: [
  //       ...externalScriptSrc,
  //       `${cdnUrl}/${refManifest['vendor.js']}`,
  //       `${cdnUrl}/${refManifest['app.js']}`,
  //     ],
  //     styleSrc: `${cdnUrl}/${refManifest['main.css']}`,
  //   }
  // }

  return {
    scriptSrcs: [
      ...externalScriptSrc,
      'http://localhost:3001/static/vendor.js',
      'http://localhost:3001/static/dev.js',
      'http://localhost:3001/static/app.js',
    ],
    styleSrc: '/main.css',
  }
})()

if (process.env.NODE_ENV === 'production') {
  server.use(Express.static(path.join(__dirname, '../..', 'public')))
} else {
  server.use('/assets', Express.static(path.join(__dirname, '..', 'assets')))
  server.use(Express.static(path.join(__dirname, '../..', 'dist')))
}

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.get('*', (req, res, next) => {
  const history = useRouterHistory(createMemoryHistory)()
  const store = configureStore({})
  const routes = createRoutes(history, store)
  const queryString = qs.stringify(req.query)
  let currentUrl = req.path + (queryString.length ? `?${queryString}` : '')

  const subscribeUrl = () => {
    const unsubscribe = history.listen((newLoc) => {
      if (newLoc.action === 'PUSH' || newLoc.action === 'REPLACE') {
        currentUrl = newLoc.pathname + newLoc.search
      }
    })
    return [() => currentUrl, unsubscribe]
  }

  match(({ routes, location: currentUrl }), (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      res.status(500).send(error.message)
    } else if (_.isEmpty(renderProps)) {
      res.status(404).send('Not Found')
    } else {
      const getReduxPromise = () => {
        const { query, params } = renderProps
        const comp = renderProps.components[renderProps.components.length - 1].WrappedComponent
        const promise = comp.fetchData
          ? comp.fetchData({ query, params, store, history })
          : Promise.resolve()

        return promise
      }

      const [getCurrentUrl, unsubscribe] = subscribeUrl(currentUrl, history)
      getReduxPromise()
        .then(() => {
          const reduxState = escape(JSON.stringify(store.getState()))
          const html = ReactDOMServer.renderToString(
            <Provider store={store}>
              {<RouterContext {...renderProps} />}
            </Provider>,
          )
          const metaHeader = Helmet.rewind()

          if (getCurrentUrl() === currentUrl) {
            res.render('index', {
              metaHeader,
              html,
              scriptSrcs,
              reduxState,
              styleSrc,
            })
          } else {
            res.redirect(302, getCurrentUrl())
          }
          unsubscribe()
        })
        .catch((err) => {
          Helmet.rewind()
          unsubscribe()
          next(err)
        })
    }
  })
})

server.use((err, req, res) => {
  console.log(err.stack)
  res.status(500).send(err.message)
})

console.log(`Server is listening to port: ${port}`)
server.listen(port)
