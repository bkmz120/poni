import React from 'react'
import PropTypes from 'prop-types'

import Popup from '@components/Popup'
import FiltersBar from '@containers/FiltersBarContainer'
import ProductsList from '@containers/ProductsListContainer'

import style from './style/index.css'

export default class ProductsPopup extends React.Component {
  render () {
    const {
      isOpen,
      onClose,
    } = this.props

    return <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.container}>
        <div className={style.head}>
          <FiltersBar />
        </div>
        <div className={style.srcollArea}>
          <ProductsList />
        </div>
      </div>
    </Popup>
  }
}

ProductsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
