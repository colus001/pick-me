import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { auth } from 'services/firebase'

import LoginForm from 'components/LoginForm'

import styles from './Login.scss'

class Login extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  onSubmit = (values) => {
    const { email, password } = values
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (!user) return

        const { currentUser } = auth
        if (currentUser.emailVerified) return

        currentUser.sendEmailVerification()
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          return auth.createUserWithEmailAndPassword(email, password)
        }

        throw new Error(error)
      })
      .then((user) => {
        if (!user) return null

        const { currentUser } = auth
        return currentUser
          .updateProfile({ displayName: email })
          .then(() => currentUser.sendEmailVerification())
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  render() {
    const { className } = this.props

    return (
      <div className={`${styles.container} ${className}`}>
        <h3>Login to offer!</h3>

        <LoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
