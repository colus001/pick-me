import React from 'react'
import { expect } from 'chai'

import Home from './'
import Socials from './components/Socials'
import TechStacks from './components/TechStacks'
import Description from './components/Description'
import Quotes from './components/Quotes'

describe('<Home />', () => {
  const rendered = shallow(
    <Home />
  )

  it('should render profile component with image', () => {
    expect(rendered.find('img').length).to.be.at.least(1)
  })

  it('should contains Description and Quotes component', () => {
    expect(rendered.contains(<Description />)).to.equal(true)
    expect(rendered.contains(<Quotes />)).to.equal(true)
    expect(rendered.contains(<Socials />)).to.equal(true)
    expect(rendered.contains(<TechStacks />)).to.equal(true)
  })
})
