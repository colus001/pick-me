import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'

import styles from './Form.scss'

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <Field name="email" component="input" type="email" placeholder="Enter your email" />

    <label htmlFor="password">Password</label>
    <Field name="password" component="input" type="password" placeholder="******" />

    <div className={styles.buttons}>
      <Button type="submit">Login</Button>
      <Button type="submit">Sign Up</Button>
    </div>
  </form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'login',
})(LoginForm)
