import { combineReducers } from 'redux'
import layoutReducer       from './layoutReducer'
import historyReducer      from './historyReducer'
import { routerReducer }   from 'react-router-redux'

const rootReducer = combineReducers({
  layoutReducer,
  historyReducer,
  routerReducer
})

export default rootReducer
