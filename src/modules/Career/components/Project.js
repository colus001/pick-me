import React from 'react'
import PropTypes from 'prop-types'

import styles from './Project.scss'

const Project = ({ name, link, description, achievements }) => (
  <div className={styles.container}>
    {!link ? (
      <h5>{name}</h5>
    ) : (
      <a rel="noopener noreferrer" target="_blank" href={link}>
        <h5>{name}</h5>
      </a>
    )}
    {description && (
      <p>{description}</p>
    )}
    <ul>
      {achievements && achievements.map(achievement => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
  </div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string),
}

Project.defaultProps = {
  link: null,
  description: null,
  achievements: null,
}

export default Project
