import { Route } from 'react-router-dom'

import Home from 'modules/Home'
import About from 'modules/About'
import Career from 'modules/Career'
import PickMe from 'modules/PickMe'
import Hire from 'modules/Hire'

import createRoutes from './routes'

describe('routes', () => {
  it('should render correct routes', () => {
    const rendered = shallow(createRoutes({}))
    const pathMap = rendered.find(Route).reduce((path, route) => {
      const routeProps = route.props()
      path[routeProps.path] = routeProps.component // eslint-disable-line
      return path
    }, {})

    expect(pathMap['/']).toBe(Home)
    expect(pathMap['/about']).toBe(About)
    expect(pathMap['/career']).toBe(Career)
    expect(pathMap['/pickme']).toBe(PickMe)
    expect(pathMap['/hire']).toBe(Hire)
  })
})
