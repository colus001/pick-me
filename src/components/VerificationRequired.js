import React from 'react'
import PropTypes from 'prop-types'

import { auth } from 'services/firebase'

import Button from 'components/Button'

import styles from './VerificationRequired.scss'

const onClick = () => auth.currentUser
  .sendEmailVerification()
  .then(() => alert('Okay, we sent verification email again. It might take some minutes.'))
  .catch(error => alert(`Error occured while send email: ${error.code}`))

const VerificationRequired = ({ className }) => (
  <div className={`${styles.container} ${className}`}>
    <h3>
      You have not verified email address yet
    </h3>
    <p>
      Please check your email or click button below to send it again.
      If you already click link from email, please refresh this page.
    </p>
    <Button onClick={onClick}>
      Send Again
    </Button>
  </div>
)

VerificationRequired.propTypes = {
  className: PropTypes.string,
}

VerificationRequired.defaultProps = {
  className: '',
}

export default VerificationRequired
