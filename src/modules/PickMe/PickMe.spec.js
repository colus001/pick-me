import React from 'react'

import PickMe from './'

describe('<PickMe />', () => {
  it('should match snapshot', () => {
    const rendered = shallow(<PickMe />)

    expect(rendered).toMatchSnapshot()
  })
})
