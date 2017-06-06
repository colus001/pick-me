import React from 'react'

import styles from './SoftSkills.scss'

const SoftSkills = () => (
  <section className={styles.container}>
    <h3>Soft Skills</h3>
    <p>
      Programming language is another way of communicating to others, like normal language I've learned.
    </p>
    <dl>
      <dt>Communicator</dt>
      <dd>Best developer designers want to work with</dd>
      <dt>Prototyper</dt>
      <dd>Make it fast to prove hypothesis</dd>
      <dt>Project Manager</dt>
      <dd>Things get done in time</dd>
    </dl>
  </section>
)

export default SoftSkills
