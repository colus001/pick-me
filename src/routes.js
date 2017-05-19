import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigator from 'containers/Navigator'

import Home from 'modules/Home'
import About from 'modules/About'
import Career from 'modules/Career'
import PickMe from 'modules/PickMe'
import Hire from 'modules/Hire'
import Test from 'modules/Test'

import styles from 'styles/routes.scss'

const createRoutes = history => (
  <Router history={history}>
    <div className={styles.container}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/pickme" component={PickMe} />
      <Route exact path="/hire" component={Hire} />
      <Route exact path="/test" component={Test} />

      <Navigator />
    </div>
  </Router>
)

export default createRoutes
