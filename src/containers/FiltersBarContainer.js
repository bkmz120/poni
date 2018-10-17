import { connect } from 'react-redux'

import FiltersBar from '@components/FiltersBar'
import {
  getColorsOptions,
  getKindsOptions,
  getMinAllowedPrice,
  getMaxAllowedPrice,
  getValues,
} from '@reducers/filters'
import { changeValues, apply } from '@actions/filters'

const mapStateToProps = (state) => {
  return {
    colorsOptions: getColorsOptions(state),
    kindsOptions: getKindsOptions(state),
    minAllowedPrice: getMinAllowedPrice(state),
    maxAllowedPrice: getMaxAllowedPrice(state),
    values: getValues(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeValues: (values) => dispatch(changeValues(values)),
    apply: () => dispatch(apply()),
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends FiltersBar {};
