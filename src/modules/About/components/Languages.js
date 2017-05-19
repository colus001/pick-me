import { map } from 'lodash'
import React from 'react'

import styles from './Languages.scss'

const languages = {
  kr: 'Native',
  jp: 'Fluent',
  gb: 'Fluent',
  br: 'Intermediate',
}

const Languages = () => (
  <section className={styles.container}>
    <h3>Languages</h3>
    <p>
      One of my passions went in younger years was <strong>to learn languages</strong>. Started from Japanese, I even entered a university to learn more languages such as Protuguese. Programming languages are also for me to communicate with others.
    </p>
    <ul>
      {map(languages, (level, language) => (
        <li key={`${language}-${level}`}>
          <i className={`flag-icon flag-icon-${language}`} /> {level}
        </li>
      ))}
    </ul>
  </section>
)

export default Languages
