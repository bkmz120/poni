import { connect } from 'react-redux'

import App from '@components/App'
import { init } from '@actions/app'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(init()),
  }
}

export default @connect(mapStateToProps, mapDispatchToProps)
class extends App {};
