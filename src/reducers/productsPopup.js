const INITIAL_STATE = {
  isOpen: true,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_PRODUCTS_POPUP':
      return {
        ...state,
        isOpen: true,
      }
    case 'CLOSE_PRODUCTS_POPUP':
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}

export const getIsOpen = (state) => state.productsPopup.isOpen
