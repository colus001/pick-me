import React from 'react'

import About from './'

describe('<About />', () => {
  it('should match snapshot', () => {
    const rendered = shallow(<About />)

    expect(rendered).toMatchSnapshot()
  })
})
