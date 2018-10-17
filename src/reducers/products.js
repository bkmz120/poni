import { getAppliedValues } from '@reducers/filters'

const INITIAL_STATE = {
  items: [],
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INIT':
      const {
        products
      } = action.payload

      return {
        ...state,
        items: [...products],
      }
    default:
      return state
  }
}

const getItems = (state) => state.products.items

export const getFilteredItems = (state) => {
  const filters = getAppliedValues(state)
  return getItems(state).filter((item) => {
    return (filters.color === '' || item.color === filters.color) &&
           (filters.kind === '' || item.kind === filters.kind)
  })
}
