import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'

import Button from 'components/Button'

const onButtonClick = sinon.spy()

describe('<Button />', () => {
  const rendered = shallow(
    <Button onClick={onButtonClick}>
      안녕
    </Button>
  )

  it('should render button with given children', () => {
    expect(rendered.text()).to.equal('안녕')
  })

  it('should fire click event', () => {
    rendered.simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })
})
