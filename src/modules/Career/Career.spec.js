import React from 'react'
import { expect } from 'chai'

import Career from './'
import Company from './components/Company'

describe('<Career />', () => {
  const rendered = shallow(
    <Career />
  )

  it('should contains Company component', () => {
    expect(rendered.find(Company)).to.have.length(3)
  })
})
