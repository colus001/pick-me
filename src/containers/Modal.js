import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ModalHelper from 'helpers/modal'

import Modal from 'components/Modal'

class ModalContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    title: 'Pick Me',
    content: '',
  }

  render() {
    const { title, content, isVisible } = this.props

    return isVisible && (
      <Modal
        title={title}
        content={content}
        onClickHide={ModalHelper.hideModal}
      />
    )
  }
}

const mapStateToProps = ({ modal }) => ({
  ...modal,
})

export default connect(
  mapStateToProps,
)(ModalContainer)
