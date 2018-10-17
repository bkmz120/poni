export const changeValues = (values) => ({
  type: 'CHANGE_FILTERS_VALUES',
  payload: {
    values,
  }
})

export const apply = () => ({
  type: 'APPLY_FILTERS'
})
