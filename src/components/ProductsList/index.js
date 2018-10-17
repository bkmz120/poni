import React from 'react'
import PropTypes from 'prop-types'

import ProductItem from '@components/ProductItem'
import style from './style/index.css'

export default class ProductsList extends React.Component {
  render () {
    const {
      items,
    } = this.props

    return <div className={style.productsList}>
      { items.length > 0 && items.map((item) => <ProductItem key={item.name} product={item} />)}
      { items.length === 0 && <div className={style.notFound}>Пони не найдены</div>}
    </div>
  }
}

ProductsList.propTypes = {
  items: PropTypes.array,
}
