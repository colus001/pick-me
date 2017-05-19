import React from 'react'

import styles from './Why.scss'

const Why = () => (
  <section className={styles.container}>
    <h3>Why?</h3>

    <h4>As a developer</h4>
    <p>
      It's very difficult show your talent in code interview. You may be too nervous to answer the question properly. And sometimes even coding test doesn't prove anything especially you are not majored in CS or just forgot some "fancy" algorithms. In my opinion it's about how to find an answer not memory.
    </p>
    <p>
      Futhermore it's very difficult to show your talent and skills. So I made [this]() to show my skill and to receieve offers easily. Hiring manager can look around this website and who knows code can see inside code itself including scaffolding, unit-test, coding habbit and so on.
    </p>

    <h4>As a hiring manager</h4>
    <p>
      Being a developer is not about solving algorithmic problems. Maybe some companies like Google might need those kinds of talent but not every company does. Many developer who's active in open source community like Github has no problem. But there are many more who hasn't contributed open source for some reason but still awesome guys and girls.
    </p>
    <p>
      [Pick Me]() demonstrates better. You can see at least this developer can make an react-based website. And it's also possible to show code of the application to engineer in the company. It will be easier to find out if this guy is real.
    </p>
  </section>
)

export default Why

/* eslint {
  max-len: 0,
  react/no-unescaped-entities: 0,
}*/
