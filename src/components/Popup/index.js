import React from 'react'
import PropTypes from 'prop-types'

import style from './style/index.css'

export default class Popup extends React.Component {
  render () {
    const {
      isOpen,
      onClose,
      children,
    } = this.props

    if (!isOpen) return null

    return <div className={style.popup}>
      <div
        className={style.close}
        onClick={onClose}
      ></div>
      {children}
    </div>
  }
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}
