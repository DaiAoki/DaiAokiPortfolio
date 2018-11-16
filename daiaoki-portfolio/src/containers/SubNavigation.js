import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import SubNavigation from '../components/layout/SubNavigation'

function mapStateToProps(state) {
  return {
    navType: state.layoutReducer.navType,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubNavigation)
