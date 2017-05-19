import React from 'react'
import PropTypes from 'prop-types'

const Code = ({ children }) => (
  <pre>
    <code>
      {children}
    </code>
  </pre>
)

Code.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Code
