import React from 'react'

import App from './'

describe('<App />', () => {
  it('should match snapshot', () => {
    const rendered = shallow(<App />)

    expect(rendered).toMatchSnapshot()
  })
})
