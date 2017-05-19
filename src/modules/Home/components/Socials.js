import { map } from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Socials.scss'

const links = {
  rss: 'http://seokjun.kr',
  github: 'https://github.com/colus001',
  facebook: 'https://www.facebook.com/analogstyle',
  linkedin: 'https://www.linkedin.com/in/seokjunkim',
}

class Socials extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props

    return (
      <section className={styles.container} onClick={this.onClick} >
        {children}
        {map(links, (link, key) => (
          <a
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className={styles.link}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x" />
              <i className={`fa fa-${key} fa-stack-1x fa-inverse`} />
            </span>
          </a>
        ))}
      </section>
    )
  }
}

export default Socials
