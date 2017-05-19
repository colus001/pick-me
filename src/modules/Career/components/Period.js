import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Period.scss'

const Period = ({ from, to }) => (
  <div className={styles.container}>
    {moment(from).format('YYYY-MM')}
    {' ~ '}
    {to ? moment(to).format('YYYY-MM') : 'Current'}
  </div>
)

Period.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
}

Period.defaultProps = {
  to: null,
}

export default Period
