import { connect } from 'react-redux'

import OpenProducts from '@components/OpenProducts'
import { open } from '@actions/productsPopup'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(open()),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...dispatchProps,
    ...ownProps,
  }
}

export default @connect(mapStateToProps, mapDispatchToProps, mergeProps)
class extends OpenProducts {};
