import memoizee from 'memoizee'

const INITIAL_STATE = {
  allItems: [],
  visibleItems: [],
}

const VISIBLE_PRODUCTS_LIMIT = 20;

const randLimit = (items, limit) => {
  const result = []
  const indexes = {}
  for (let i = 0; i < items.length && i < limit; i++) {
    let j
    do {
      j = Math.floor(Math.random() * (items.length))
    } while (indexes[j] === true)
    indexes[j] = true
    result.push(items[j])
  }
  return result
}

const applyFilter = (
  items,
  filterColor,
  filterKind,
  filterMinPrice,
  filterMaxPrice,
  filterIsNew,
) => {
  return items.filter((item) => {
    const checkColor = filterColor === '' || item.color === filterColor
    const checkKind = filterKind === '' || item.kind === filterKind
    const checkMinPrice = filterMinPrice === '' || item.price >= parseFloat(filterMinPrice)
    const checkMaxPrice = filterMaxPrice === '' || item.price <= parseFloat(filterMaxPrice)
    const chekIsNew = !filterIsNew || (filterIsNew && item.is_new)
    return checkColor &&
           checkKind &&
           checkMinPrice &&
           checkMaxPrice &&
           chekIsNew
  })
}

const memoizedApplyFilter = memoizee(applyFilter, { max: 50 })

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INIT':
      const products = [...action.payload.products]

      return {
        ...state,
        allItems: products,
        visibleItems: randLimit(products, VISIBLE_PRODUCTS_LIMIT),
      }
    case 'UPDATE_VISIBLE_PRODUCTS':
      const {
        filterColor,
        filterKind,
        filterMinPrice,
        filterMaxPrice,
        filterIsNew
      } = action.payload

      const filteredItems = memoizedApplyFilter(
        state.allItems,
        filterColor,
        filterKind,
        filterMinPrice,
        filterMaxPrice,
        filterIsNew
      )

      return {
        ...state,
        visibleItems: randLimit(filteredItems, VISIBLE_PRODUCTS_LIMIT),
      }
    default:
      return state
  }
}

export const getFilteredProducts = (state) => state.products.visibleItems
