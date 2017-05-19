import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import styles from './Offer.scss'

const Offer = ({ company, position, salary, isConfirmed }) => (
  <div className={`${styles.container} ${isConfirmed ? styles.confirmed : styles.unConfirmed}`}>
    {company} as {position}
    <i className={`fa fa-caret-right ${styles.caret}`} />
    {numeral(salary).format('0,0')} KRW
    {isConfirmed && (
      <i className={`fa fa-check ${styles.check}`} />
    )}
  </div>
)

Offer.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  isConfirmed: PropTypes.bool,
}

Offer.defaultProps = {
  isConfirmed: false,
}

export default Offer
