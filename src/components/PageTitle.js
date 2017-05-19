import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageTitle.scss'

const PageTitle = ({ title, subTitle }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {subTitle && <h6 className={styles.subTitle}>{subTitle}</h6>}
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

PageTitle.defaultProps = {
  subTitle: null,
}

export default PageTitle
