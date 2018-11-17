import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import SubNavigation from '../components/layout/SubNavigation'

function mapStateToProps(state) {
  return {
    navType:   state.layoutReducer.navType,
    subItems:  state.subItemReducer.subItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectHistory(id) {
      dispatch({type: 'SELECT_HISTORY', id})
    },
    selectTactics(id) {
      dispatch({type: 'SELECT_TACTICS', id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubNavigation)
