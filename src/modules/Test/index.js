import React from 'react'

import PageTitle from 'components/PageTitle'
import Coverage from './components/Coverage'

import styles from './Test.scss'

const Test = () => (
  <div className={styles.container}>
    <PageTitle title="Unit Test" />
    <Coverage />
  </div>
)

export default Test

/* eslint react/no-danger: 0 */
