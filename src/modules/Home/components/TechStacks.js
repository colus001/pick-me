import React from 'react'

import styles from './TechStacks.scss'

const iconNames = [
  'react-original-wordmark',
  'nodejs-plain',
  'sass-original',
  'nginx-plain',
  'mongodb-plain-wordmark',
  'docker-plain-wordmark',
  'go-line',
]

const TechStacks = () => (
  <section className={styles.container}>
    <h3>Tech Stacks in Favour</h3>
    {iconNames.map(n => (
      <i key={n} className={`devicon-${n} colored`} />
    ))}
  </section>
)

export default TechStacks
