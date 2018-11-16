import { combineReducers } from 'redux'
import layoutReducer       from './layoutReducer'
import performanceReducer  from './performanceReducer'
import { routerReducer }   from 'react-router-redux'

const rootReducer = combineReducers({
  layoutReducer,
  performanceReducer,
  routerReducer
})

export default rootReducer
