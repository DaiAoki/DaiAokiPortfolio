import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import History from '../components/History'

function mapStateToProps(state) {
  return {
    selectedHistoryId: state.historyReducer.selectedHistoryId,
    histories:         state.historyReducer.histories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
