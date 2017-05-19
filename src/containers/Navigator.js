import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { auth } from 'services/firebase'

import NavigatorComponent from 'components/Navigator'

export const links = [{
  title: 'Hello World',
  to: '/',
}, {
  title: 'Who am I',
  to: '/about',
}, {
  title: 'Work Experience',
  to: '/career',
}, {
  title: 'Hire Me',
  to: '/hire',
}, {
  title: 'Unit Test',
  to: '/test',
}, {
  title: 'About Pick Me',
  to: '/pickme',
}]

class Navigator extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  }

  onClickLogout = () => {
    auth.signOut()
  }

  render() {
    return (
      <NavigatorComponent
        links={links}
        onClickLogout={this.props.isLoggedIn && this.onClickLogout}
      />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  isLoggedIn: !!user.uid,
})

export default connect(
  mapStateToProps,
)(Navigator)
