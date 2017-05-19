import React from 'react'
import { expect } from 'chai'

import Test from './'
import Coverage from './components/Coverage'

describe('<Test />', () => {
  const rendered = shallow(<Test />)

  it('should render Coverage component', () => {
    expect(rendered.find(Coverage)).to.have.length(1)
  })
})
