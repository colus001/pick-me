import React from 'react'

import styles from './Quotes.scss'

const whatIsFullStackDeveloper = `
"It has nothing to do with the web, it’s just a general mindset of being willing to learn new shit and wanting to try new stuff to be able to tackle complex problems that span multiple domains. It’s a new, probably temporary label that we tack onto software people willing to do whatever it takes to get the job done. And there will be a job for those people as long as there are jobs for anyone."
`

const Quotes = () => (
  <section className={styles.container}>
    <h3>Full Stack Developer?</h3>
    <blockquote>
      <p>{whatIsFullStackDeveloper}</p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.quora.com/Is-it-becoming-much-harder-to-be-a-Full-Stack-web-developer-and-will-full-stack-developers-cease/answer/Carlos-Matias-La-Borde"
        >
        - Carlos Matias La Borde, former coder at IBM, BSc in CS
        </a>
      </p>
    </blockquote>
  </section>
)

export default Quotes
