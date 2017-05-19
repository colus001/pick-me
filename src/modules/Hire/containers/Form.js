import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import firebase, { auth } from 'services/firebase'

import VerificationRequired from 'components/VerificationRequired'
import Login from 'containers/Login'

import Form from '../components/Form'

import styles from './Form.scss'

class FormContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
      email: PropTypes.string,
    }),
    hasOffer: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    user: {},
  }

  onSubmit = (values) => {
    const { isVerified, user } = this.props
    if (!isVerified) {
      alert('You need to login first')
      return
    }

    const offer = {
      ...values,
      salary: parseInt(values.salary, 10),
      timestamp: new Date().getTime(),
      createdBy: user,
    }

    auth.currentUser.getToken(true)
      .then(() => firebase.ref('offers').push(offer))
      .then((r) => {
        console.log(r)
        alert('You have succesfully offered to me!')
      })
      .catch((e) => {
        if (e.code !== 'PERMISSION_DENIED') {
          alert('You have no permission to submit offer.')
          return
        }

        alert(e.message)
      })
  }

  render() {
    const { isLoggedIn, isVerified, hasOffer } = this.props

    return (
      <section className={styles.container}>
        <h3>{hasOffer ? 'I want to offer too!' : 'Make a first offer!'}</h3>

        <Form
          className={!isVerified && styles.disabled}
          onSubmit={this.onSubmit}
          hasOffer={hasOffer}
        />
        {!isLoggedIn && (
          <Login className={styles.login} />
        )}
        {isLoggedIn && !isVerified && (
          <VerificationRequired className={styles.login} />
        )}
      </section>
    )
  }
}

const mapStateToProps = ({ user, offers }) => ({
  hasOffer: offers && offers.length > 0,
  user,
  isLoggedIn: !!user.uid,
  isVerified: !!user.uid && user.emailVerified,
})

export default connect(
  mapStateToProps
)(FormContainer)
