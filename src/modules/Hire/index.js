import React from 'react'

import PageTitle from 'components/PageTitle'

import Form from './containers/Form'
import Offers from './containers/Offers'

import styles from './Hire.scss'

const Hire = () => (
  <div className={styles.container}>
    <PageTitle
      title="Hire Me"
      subTitle="Steal freedom from this guy"
    />

    <Offers />
    <Form />
  </div>
)

export default Hire
