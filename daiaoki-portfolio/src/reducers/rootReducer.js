import { combineReducers } from 'redux'
import layoutReducer       from './layoutReducer'
import subItemReducer      from './subItemReducer'
import { routerReducer }   from 'react-router-redux'

const rootReducer = combineReducers({
  layoutReducer,
  subItemReducer,
  routerReducer
})

export default rootReducer
