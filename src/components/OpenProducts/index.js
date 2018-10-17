import React from 'react'
import PropTypes from 'prop-types'

export default class OpenProducts extends React.Component {
  render () {
    const {
      onClick,
      children,
    } = this.props
    return <span onClick={onClick} >
      {children}
    </span>
  }
}

OpenProducts.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}
