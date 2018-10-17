import memoizee from 'memoizee'

import {
  getFilterColor,
  getFilterKind,
  getFilterMinPrice,
  getFilterMaxPrice,
  getFilterIsNew
} from '@reducers/filters'

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

const getAllItems = (state) => state.products.items

const filterItems = (items, filterColor, filterKind, filterMinPrice, filterMaxPrice, filterIsNew) => {
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

const memoizeeFilterItems = memoizee(filterItems)

export const getFilteredItems = (state) => {
  const items = getAllItems(state)
  const filterColor = getFilterColor(state)
  const filterKind = getFilterKind(state)
  const filterMinPrice = getFilterMinPrice(state)
  const filterMaxPrice = getFilterMaxPrice(state)
  const filterIsNew = getFilterIsNew(state)

  return memoizeeFilterItems(items, filterColor, filterKind, filterMinPrice, filterMaxPrice, filterIsNew)
}

export const getFilteredItemsRandLimited = (state, limit) => {
  const items = getFilteredItems(state)
  const result = []
  const indexes = {}
  for (let i = 0; i < items.length; i++) {
    let j;
    do {
      j = Math.floor(Math.random() * (items.length))
    } while (indexes[j] === true)
    indexes[j] = true;
    result.push(items[j]);
  }
  return result;
}
