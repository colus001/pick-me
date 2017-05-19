import React from 'react'
import PropTypes from 'prop-types'

import styles from './Center.scss'

const Center = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

Center.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Center
