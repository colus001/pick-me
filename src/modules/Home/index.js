import React from 'react'

import profileImage from 'assets/myProfile.png'

import { Ribbon } from 'components/Github'
import TechStacks from './components/TechStacks'
import Socials from './components/Socials'
import Description from './components/Description'
import Quotes from './components/Quotes'

import styles from './Home.scss'

// TODO: Add PickMe Badge.

const Home = () => (
  <div className={styles.container}>
    <Ribbon />
    <img
      className={styles.profileImage}
      src={profileImage}
      alt="My Profile"
    />
    <Socials />
    <Description />
    <Quotes />
    <TechStacks />
  </div>
)

export default Home
