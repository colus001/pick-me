import { orderBy } from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Offer from '../components/Offer'

class Offers extends Component {
  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { offers } = this.props
    const hasOffer = offers.length > 0
    if (!hasOffer) return null

    return (
      <section>
        <h3>{offers.length} offers already made!</h3>
        {orderBy(offers, o => -o.timestamp).map(offer => (
          <Offer
            key={offer.id}
            {...offer}
          />
        ))}
      </section>
    )
  }
}

const mapStateToProps = ({ offers }) => ({
  offers,
})

export default connect(
  mapStateToProps,
)(Offers)
