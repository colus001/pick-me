import React from 'react'
import { expect } from 'chai'

import Company from './Company'
import Period from './Period'
import Projects from './Projects'

const TEST_PROPS = {
  company: 'SOCAR',
  position: 'Manager',
  period: { from: '2015-10', to: '2017-03' },
  description: 'Hired for front-end web developer position but currently working as JS full-stack DevOps.',
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

describe('<Company />', () => {
  const rendered = shallow(
    <Company {...TEST_PROPS} />
  )

  it('should render company name', () => {
    const h3 = rendered.find('h3')
    expect(h3).to.have.length(1)
    expect(h3.text()).to.equal(TEST_PROPS.company)
  })

  it('should render position', () => {
    const h5 = rendered.find('h5')
    expect(h5).to.have.length(1)
    expect(h5.text()).to.equal(TEST_PROPS.position)
  })

  it('should render description', () => {
    const p = rendered.find('p')
    expect(p).to.have.length(1)
    expect(p.text()).to.equal(TEST_PROPS.description)
  })

  it('should render <Period />', () => {
    expect(rendered.find(Period)).to.have.length(1)
  })

  it('should render <Projects />', () => {
    expect(rendered.find(Projects)).to.have.length(1)
  })
})
