import React from 'react'
import { expect } from 'chai'

import Period from './Period'

const TEST_PROPS = {
  from: '2015-10',
  to: '2017-03',
}

describe('<Period />', () => {
  it('should render period', () => {
    const rendered = shallow(<Period />)
    rendered.setProps(TEST_PROPS)

    expect(rendered.text()).to.equal('2015-10 ~ 2017-03')
  })
})
