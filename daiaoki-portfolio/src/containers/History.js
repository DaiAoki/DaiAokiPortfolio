import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import History from '../components/History'
import { changeHistory } from '../actions/History'

function mapStateToProps(state) {
  return {
    selectedHistoryId: state.subItemReducer.selectedHistoryId,
    subItems:          state.subItemReducer.subItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeHistory(id, cnt) {
      dispatch(changeHistory(id, cnt))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
