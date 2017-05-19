// import { map } from 'lodash'
import React from 'react'

import Code from 'components/Code'

import styles from './Programming.scss'

const programmings = `{
  languages: {
    javascript: 'fluent',
    html: 'fluent',
    css: 'fluent',
    pyhton: 'intermediate'
  }
  front: ['react', 'react-native', 'angular', 'jQuery'],
  back: ['node.js', 'nginx'],
  database: ['MongoDB', 'MySQL', 'redis'],
  devOps: ['aws', 'google cloud', 'jenkins', 'travis', 'docker'],
  OS: ['mac', 'linux']
}`

const Programming = () => (
  <section className={styles.container}>
    <h3>Technical Profile</h3>
    <p>
      I wanted to build a company in thirty. Although I failed to make a success, tried to find out why I've missed a chance. This is why I began learning programming.
    </p>
    <Code>
      {programmings}
    </Code>
    <p>
      Node.js was my first coding experience. But I had huge interest in front-end related stuffs since I like to show stuffs to people. So naturally I became <strong>full-stack developer</strong> and learned <strong>DevOps</strong> skills to operate live service.
    </p>
  </section>
)

export default Programming
