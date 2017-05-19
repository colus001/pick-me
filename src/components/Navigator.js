import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Navigator.scss'

class Navigator extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })).isRequired,
    onClickLogout: PropTypes.oneOfType([
      PropTypes.func, PropTypes.bool,
    ]),
  }

  static defaultProps = {
    onClickLogout: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      isShowing: false,
    }
  }

  onClick = (scroll) => {
    this.setState({ isShowing: !this.state.isShowing })
    if (scroll === true) window.scrollTo(0, 0)
  }

  render() {
    const { links, onClickLogout } = this.props
    const { isShowing } = this.state

    return (
      <div className={styles.container}>
        <a onClick={this.onClick} className={styles.link}>
          <i className={`fa ${isShowing ? 'fa-circle' : 'fa-circle-o'} ${styles.icon}`} />
        </a>
        <span className={`${styles.wrapper} ${isShowing && styles.showWrapper}`}>
          <h3>Want to know more?</h3>
          <ul className={styles.list}>
            {links.map(link => (
              <li key={link.to} className={styles.listItem}>
                <Link to={link.to} onClick={() => this.onClick(true)}>
                  {link.title}
                </Link>
              </li>
            ))}
            {onClickLogout && (
              <li className={styles.listItem}>
                <a onClick={onClickLogout}>
                  Log Out
                </a>
              </li>
            )}
          </ul>
        </span>
      </div>
    )
  }
}

export default Navigator
