import { combineReducers } from 'redux'
import performanceReducer  from './performanceReducer'
import { routerReducer }   from 'react-router-redux'

const rootReducer = combineReducers({
  performanceReducer,
  routerReducer
})

export default rootReducer
