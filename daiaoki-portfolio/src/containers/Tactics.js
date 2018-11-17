import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Tactics from '../components/Tactics'

function mapStateToProps(state) {
  return {
    selectedTacticsId: state.subItemReducer.selectedTacticsId,
    subItems:          state.subItemReducer.subItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tactics)
