import React from 'react'

import PageTitle from 'components/PageTitle'
import Languages from './components/Languages'
import Programming from './components/Programming'
import SoftSkills from './components/SoftSkills'

import styles from './About.scss'

const About = () => (
  <div className={styles.container}>
    <PageTitle
      title="Who am I?"
      subTitle="My passion and me"
    />

    <Languages />
    <Programming />
    <SoftSkills />
  </div>
)

export default About
