import { connect } from 'react-redux'

import FiltersBar from '@components/FiltersBar'
import {
  getColorsOptions,
  getKindsOptions,
  getMinAllowedPrice,
  getMaxAllowedPrice,
  getValues
} from '@reducers/filters'

import { changeValues } from '@actions/filters'
import { updateVisibleProducts } from '@actions/products'

const mapStateToProps = (state) => {
  return {
    colorsOptions: getColorsOptions(state),
    kindsOptions: getKindsOptions(state),
    minAllowedPrice: getMinAllowedPrice(state),
    maxAllowedPrice: getMaxAllowedPrice(state),
    values: getValues(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps

  const {
    color,
    kind,
    minPrice,
    maxPrice,
    isNew
  } = stateProps.values

  return {
    ...stateProps,
    changeValues: (values) => dispatch(changeValues(values)),
    apply: () => {
      dispatch(updateVisibleProducts(
        color,
        kind,
        minPrice,
        maxPrice,
        isNew,
      ))
    }
  }
}

export default @connect(mapStateToProps, null, mergeProps)
class extends FiltersBar {};
