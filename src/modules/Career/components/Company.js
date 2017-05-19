import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Period from './Period'
import Projects from './Projects'

import styles from './Company.scss'

class Company extends Component {
  static propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    period: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
    description: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    period: null,
    description: null,
    children: null,
    projects: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      isShowingProject: false,
    }
  }

  toggleProject = () => {
    this.setState({
      isShowingProject: !this.state.isShowingProject,
    })
  }

  render() {
    const { isShowingProject } = this.state
    const { company, position, period, description, projects } = this.props

    return (
      <section className={styles.container}>
        <h3>{company}</h3>
        <h5 className={styles.position}>{position}</h5>
        {' '}
        {period && <Period {...period} />}
        <p>{description}</p>

        {projects && (
          <Projects
            projects={projects}
            isShowingProject={isShowingProject}
            onClick={this.toggleProject}
          />
        )}
      </section>
    )
  }
}

export default Company
