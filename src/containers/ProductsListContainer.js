import { connect } from 'react-redux'

import ProductsList from '@components/ProductsList'
import { getFilteredItems } from '@reducers/products'

const mapStateToProps = (state) => {
  return {
    items: getFilteredItems(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends ProductsList {};
