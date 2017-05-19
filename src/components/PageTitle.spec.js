import React from 'react'
import { expect } from 'chai'

import PageTitle from './PageTitle'

const TEST_PROPS = {
  title: 'Display title here',
  subTitle: 'Subtitle will be shown',
}

describe('<PageTitle />', () => {
  const rendered = shallow(<PageTitle />)
  rendered.setProps(TEST_PROPS)

  it('should render title', () => {
    const h2 = rendered.find('h2')
    expect(h2.text()).to.equal(TEST_PROPS.title)
  })

  it('should render subTitle', () => {
    const h6 = rendered.find('h6')
    expect(h6.text()).to.equal(TEST_PROPS.subTitle)
  })
})
