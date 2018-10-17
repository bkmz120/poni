import React from 'react'
import PropTypes from 'prop-types'

import { productShape } from '@shapes'
import style from './style/index.css'

export default class ProductItem extends React.PureComponent {
  render () {
    const {
      product
    } = this.props

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

      { product.is_new &&
        <div className={style.isNew}>
          Новинка!
        </div>
      }
    </div>
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape(productShape).isRequired,
}
