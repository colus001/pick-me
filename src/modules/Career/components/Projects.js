import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Project from './Project'

import styles from './Projects.scss'

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    const { projects } = this.props
    const icon = isShowingProject ? 'angle-down' : 'angle-right'

    return (
      <div className={styles.container}>
        <a className={styles.link} onClick={this.toggleProject}>
          <i className={`fa fa-fw fa-${icon}`} /> Projects
        </a>

        {isShowingProject && projects.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    )
  }
}

export default Projects
