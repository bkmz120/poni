import { connect } from 'react-redux'

import ProductsList from '@components/ProductsList'
import { getFilteredProducts } from '@reducers/products'

const mapStateToProps = (state) => {
  return {
    items: getFilteredProducts(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends ProductsList {};
