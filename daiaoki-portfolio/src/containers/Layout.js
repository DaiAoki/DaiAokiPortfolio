import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Layout from '../components/layout/Layout'

function mapStateToProps(state) {
  return {
    currentPath: state.layoutReducer.currentPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
