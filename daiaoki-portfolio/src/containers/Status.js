import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Status from '../components/Status'

function mapStateToProps(state) {
  return {
    subItems: state.subItemReducer.subItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status)
