import { connect } from 'react-redux'

import ProductsList from '@components/ProductsList'
import { getFilteredItemsRandLimited } from '@reducers/products'

const mapStateToProps = (state) => {
  return {
    items: getFilteredItemsRandLimited(state,3),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends ProductsList {};
