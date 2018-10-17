import React from 'react'
import PropTypes from 'prop-types'

import ProductsPopup from '@containers/ProductsPopupContainer'
import OpenProducts from '@containers/OpenProductsContainer'
import style from './style/index.css'

export default class App extends React.Component {
  componentDidMount () {
    this.props.init()
  }

  render () {
    return <div className={style.app}>
      <OpenProducts>
        <a href="#1">open1</a>
      </OpenProducts>
      <br/>
      <OpenProducts>
        <a href="#2">open2</a>
      </OpenProducts>

      <ProductsPopup />
    </div>
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
}
