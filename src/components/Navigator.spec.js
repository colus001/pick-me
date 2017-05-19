import React from 'react'
import { Link } from 'react-router-dom'
import { expect } from 'chai'

import Navigator, { links } from './Navigator'

describe('<Navigator />', () => {
  const rendered = shallow(
    <Navigator />
  )

  const renderedLinks = rendered.find(Link)

  it('should render navigator with 6 Link components', () => {
    expect(renderedLinks).to.have.length(6)
  })

  it('should have proper links', () => {
    renderedLinks.map((link, index) => {
      const { to, title } = link.props()
      expect(to).to.equal(links[index].to)
      expect(title).to.equal(links[index].children)
      return link
    })
  })
})
