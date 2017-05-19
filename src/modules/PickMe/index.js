import React from 'react'

import PageTitle from 'components/PageTitle'
import Github from 'components/Github'
import Why from './components/Why'
import Technologies from './components/Technologies'

import styles from './PickMe.scss'

const PickMe = () => (
  <div className={styles.container}>
    <PageTitle
      title="About Pick Me"
      subTitle="Pick Me Pick Me Pick Me Up ~"
    />
    <Github />
    <Why />
    <Technologies />
  </div>
)

export default PickMe
