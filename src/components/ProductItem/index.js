import React from 'react'
import PropTypes from 'prop-types'

import { productShape } from '@shapes'
import style from './style/index.css'

export default class ProductItem extends React.PureComponent {
  render () {
    const {
      product
    } = this.props

    console.log('render')

    return <div className={style.productItem}>
      <div className={style.label}>
        Имя
      </div>
      <div className={style.value}>
        {product.name}
      </div>
      <div className={style.label}>
        Цвет
      </div>
      <div className={style.value}>
        {product.color}
      </div>
      <div className={style.label}>
        Вид
      </div>
      <div className={style.value}>
        {product.kind}
      </div>
      <div className={style.label}>
        Цена
      </div>
      <div className={style.value}>
        {product.price}
      </div>
      <div className={style.label}>
        Новый
      </div>
      <div className={style.value}>
        {product.is_new}
      </div>
    </div>
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape(productShape).isRequired,
}
