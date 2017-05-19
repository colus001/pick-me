import React from 'react'

import styles from './Github.scss'

export const Star = () => (
  <iframe
    className={styles.star}
    title="github-star-button"
    src="https://ghbtns.com/github-btn.html?user=colus001&repo=pick-me&type=star&count=true"
    frameBorder="0"
    scrolling="0"
    width="170px"
    height="20px"
  />
)

export const Follow = () => (
  <iframe
    title="github-follow-button"
    src="https://ghbtns.com/github-btn.html?user=colus001&type=follow&count=true"
    frameBorder="0"
    scrolling="0"
    width="170px"
    height="20px"
  />
)

export const Ribbon = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/colus001/pick-me"
  >
    <img
      className={styles.ribbon}
      src="https://camo.githubusercontent.com/c6625ac1f3ee0a12250227cf83ce904423abf351/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677261795f3664366436642e706e67"
      alt="Fork me on GitHub"
      data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"
    />
  </a>
)

const Github = () => (
  <section className={styles.container}>
    <h3>Fork me on Github</h3>
    <Star />
    <Follow />
  </section>
)

export default Github
