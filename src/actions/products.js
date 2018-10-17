export const updateVisibleProducts = (
  filterColor,
  filterKind,
  filterMinPrice,
  filterMaxPrice,
  filterIsNew
) => {
  return {
    type: 'UPDATE_VISIBLE_PRODUCTS',
    payload: {
      filterColor,
      filterKind,
      filterMinPrice,
      filterMaxPrice,
      filterIsNew
    }
  }
}
