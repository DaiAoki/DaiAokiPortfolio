import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Equipment from '../components/Equipment'

function mapStateToProps(state) {
  return {
    subItems: state.subItemReducer.subItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment)
