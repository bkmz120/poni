const INITIAL_STATE = {
  colorsList: [],
  kindsList: [],
  minAllowedPrice: 0,
  maxAllowedPrice: 0,
  appliedValues: {
    color: '',
    kind: '',
    minPrice: 0,
    maxPrice: 0,
    isNew: false,
  },
  values: {
    color: '',
    kind: '',
    minPrice: 0,
    maxPrice: 0,
    isNew: false,
  },
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INIT':
      const {
        products
      } = action.payload
      const colorsList = []
      const kindsList = []
      let minAllowedPrice = products[0] ? products[0].price : null
      let maxAllowedPrice = null

      products.forEach(product => {
        if (!colorsList.includes(product.color)) {
          colorsList.push(product.color)
        }
        if (!kindsList.includes(product.kind)) {
          kindsList.push(product.kind)
        }
        if (product.price > maxAllowedPrice) {
          maxAllowedPrice = product.price
        }
        if (product.price < minAllowedPrice) {
          minAllowedPrice = product.price
        }
      })

      colorsList.sort()
      kindsList.sort()

      return {
        ...state,
        colorsList,
        kindsList,
        minAllowedPrice,
        maxAllowedPrice,
      }
    case 'CHANGE_FILTERS_VALUES':
      const { values } = action.payload
      return {
        ...state,
        values,
      }
    case 'APPLY_FILTERS':
      return {
        ...state,
        appliedValues: {
          ...state.values
        }
      }
    default:
      return state
  }
}

export const getColorsOptions = (state) => state.filters.colorsList.map(color => ({
  label: color,
  value: color,
}))
export const getKindsOptions = (state) => state.filters.kindsList.map(kind => ({
  label: kind,
  value: kind,
}))
export const getMinAllowedPrice = (state) => state.filters.minAllowedPrice
export const getMaxAllowedPrice = (state) => state.filters.maxAllowedPrice
export const getValues = (state) => state.filters.values
export const getAppliedValues = (state) => state.filters.appliedValues
