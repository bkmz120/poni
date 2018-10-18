const INITIAL_STATE = {
  colorsList: [],
  kindsList: [],
  values: {
    color: '',
    kind: '',
    minPrice: '',
    maxPrice: '',
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

      products.forEach(product => {
        if (!colorsList.includes(product.color)) {
          colorsList.push(product.color)
        }
        if (!kindsList.includes(product.kind)) {
          kindsList.push(product.kind)
        }
      })

      colorsList.sort()
      kindsList.sort()

      return {
        ...state,
        colorsList,
        kindsList,
      }
    case 'CHANGE_FILTERS_VALUES':
      const { values } = action.payload
      return {
        ...state,
        values,
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
export const getValues = (state) => state.filters.values
