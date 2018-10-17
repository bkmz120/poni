import { connect } from 'react-redux'

import ProductsPopup from '@components/ProductsPopup'
import { close } from '@actions/productsPopup'
import { getIsOpen } from '@reducers/productsPopup'

const mapStateToProps = (state) => {
  return {
    isOpen: getIsOpen(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => dispatch(close()),
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends ProductsPopup {};
