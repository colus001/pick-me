import React from 'react'
import { expect } from 'chai'

import Project from './Project'
import Projects from './Projects'

const TEST_PROPS = {
  projects: [{
    name: 'ZEROCAR Web Promotion',
    description: 'ZEROCAR promotion website',
  }, {
    name: 'ZEROCAR',
    description: 'P2P car sharing mobile application',
  }, {
    name: 'SOCAR',
    description: 'Car sharing mobile application.',
  }],
}

describe('<Projects />', () => {
  const rendered = shallow(
    <Projects />
  )

  rendered.setProps(TEST_PROPS)

  it('should contains no <Project /> components', () => {
    expect(rendered.find(Project)).to.have.length(0)
  })

  it('should contains 3 of <Project /> components after click butotn', () => {
    rendered.find('a').simulate('click')
    expect(rendered.find(Project)).to.have.length(3)
  })
})
