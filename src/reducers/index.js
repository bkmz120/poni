import { combineReducers } from 'redux'

import products from './products'
import filters from './filters'
import productsPopup from './productsPopup'

const reducer = combineReducers({
  products,
  filters,
  productsPopup,
})

export default reducer
