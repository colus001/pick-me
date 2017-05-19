import React, { Component } from 'react'

import styles from './Coverage.scss'

import __html from '../../../../coverage/lcov-report/index.html'

const template = { __html: __html.replace(/h1/g, 'h4').replace(/<a/g, '<span').replace(/<\/a>/g, '</span>') }

class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
    }
  }

  toggleResult = () => this.setState({ isExpanded: !this.state.isExpanded })

  render() {
    const direction = this.state.isExpanded ? 'down' : 'up'

    return (
      <section className={styles.container}>
        <h3>
          Test Coverage with {' '}
          <span className={styles.framework}>Jest</span>{', '}
          <span className={styles.framework}>Enzyme</span>{', '}
          <span className={styles.framework}>Chai</span>{', '}
        </h3>
        <p>
          <em>Dumb component displaying pure text dom excluded from unit test</em>
        </p>

        <div className={styles.wrapper}>
          <a onClick={this.toggleResult}>
            <i className={`fa fa-caret-${direction} ${styles.icon}`} />
          </a>
          <div className={`${styles.scroller} ${this.state.isExpanded && styles.expanded}`}>
            <div dangerouslySetInnerHTML={template} />
          </div>
        </div>
      </section>
    )
  }
}

export default Test

/* eslint react/no-danger: 0 */
