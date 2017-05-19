import React from 'react'
import { expect } from 'chai'

import Project from './Project'

const TEST_PROPS = {
  name: 'ZEROCAR Web Promotion',
  link: 'https://zerocar.socar.kr',
  description: 'ZEROCAR promotion website',
  achievements: [
    'Lead development of React.js based single page application (SPA) including continuous integration and cloud based deployment process with AWS and Buddy.works',
    'Implemented tech stack includes redux, sass, SSR (Server Side Rendering), and webpack/gulp bundling.',
  ],
}

describe('<Project />', () => {
  const rendered = shallow(
    <Project />
  )

  rendered.setProps(TEST_PROPS)

  it('should render name', () => {
    const h5 = rendered.find('h5')
    expect(h5).to.have.length(1)
    expect(h5.text()).to.equal(TEST_PROPS.name)
  })

  it('should render link', () => {
    const a = rendered.find('a')
    expect(a).to.have.length(1)
    expect(a.props().href).to.equal(TEST_PROPS.link)
  })

  it('should render description', () => {
    const p = rendered.find('p')
    expect(p).to.have.length(1)
    expect(p.text()).to.equal(TEST_PROPS.description)
  })

  it('should render achievements', () => {
    const ul = rendered.find('ul')
    expect(ul).to.have.length(1)
    const items = ul.find('li')
    expect(items).to.have.length(2)
    items.map((item, i) => expect(item.text()).to.equal(TEST_PROPS.achievements[i]))
  })
})
