import React from 'react'

import Hire from './'

describe('<Hire />', () => {
  it('should match snapshot', () => {
    const rendered = shallow(<Hire />)

    expect(rendered).toMatchSnapshot()
  })
})
