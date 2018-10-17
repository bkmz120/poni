import PropTypes from 'prop-types'

export const productShape = {
  'name': PropTypes.string,
  'color': PropTypes.string,
  'kind': PropTypes.string,
  'price': PropTypes.number,
  'is_new': PropTypes.bool,
}
