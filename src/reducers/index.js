import { combineReducers } from 'redux'

import products from './products'
import filters from './filters'

const reducer = combineReducers({
  products,
  filters,
})

export default reducer
