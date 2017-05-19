import React from 'react'

import styles from './Technologies.scss'

const stacks = [{
  title: 'Front End',
  libraries: ['react', 'react-router', 'redux-form'],
}, {
  title: 'Styling',
  libraries: ['sass', 'css-module', 'milligram'],
}, {
  title: 'Data Handling',
  libraries: ['redux', 'redux-thunk', 'firebase'],
}, {
  title: 'Bundler',
  libraries: ['webpack', 'babel'],
}, {
  title: 'Test',
  libraries: ['jest', 'enzyme', 'chai'],
}]

const Technologies = () => (
  <section className={styles.container}>
    <h3>Technologies used in Pick Me</h3>

    {stacks.map(({ title, libraries }) => (
      <div key={title}>
        <h5>{title}</h5>
        <ul>
          {libraries.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)

export default Technologies
