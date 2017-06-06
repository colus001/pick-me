import React from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.scss'

const Modal = ({ title, content, onClickHide }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      {typeof content === 'string' ? (
        <p className={styles.content}>{content}</p>
      ) : (
        <div className={styles.content}>
          {content}
        </div>
      )}
      <i
        onClick={onClickHide}
        className={`fa fa-window-minimize ${styles.close}`}
      />
    </div>
  </div>
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickHide: PropTypes.func.isRequired,
}

export default Modal
