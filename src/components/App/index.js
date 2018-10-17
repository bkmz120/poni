import React from 'react'
import PropTypes from 'prop-types'

import FiltersBar from '@containers/FiltersBarContainer'
import ProductsList from '@containers/ProductsListContainer'
import style from './style/index.css'

export default class App extends React.Component {
  componentDidMount () {
    this.props.init()
  }

  render () {
    return <div className={style.app}>
      <FiltersBar />
      <ProductsList />
    </div>
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
}
