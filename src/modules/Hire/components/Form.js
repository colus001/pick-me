
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'

import styles from './Form.scss'

const Form = ({ className, handleSubmit }) => (
  <form className={className} onSubmit={handleSubmit}>
    <label htmlFor="company">Company</label>
    <Field name="company" component="input" type="text" placeholder="Enter your company name" />

    <label htmlFor="salary">Salary</label>
    <Field name="salary" component="input" type="number" placeholder="Enter thousand KRW" />
    <p className={styles.helper}>Please enter in units of ten million won.</p>

    <label htmlFor="position">Position</label>
    <Field name="position" component="input" type="text" placeholder="What position do you offer?" />

    <label htmlFor="location">Location / Address</label>
    <Field name="location" component="input" type="text" placeholder="Enter company location or address" />

    <label htmlFor="description">Job Description</label>
    <Field name="description" component="textarea" placeholder="Explain what do you want for me to do" />

    <div className={styles.button}>
      <Button type="submit">
        <i className="fa fa-handshake-o" /> I want you!
      </Button>
    </div>
  </form>
)

Form.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string, PropTypes.bool,
  ]),
  handleSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  className: null,
}

export default reduxForm({
  form: 'offer',
})(Form)
