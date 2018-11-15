const initialState = {
  performances: [],
}

export default function performanceReducer(state = initialState, action) {
  switch(action.type) {
  case 'GET_CATEGORIES_SUCCESS':
    return {
      ...state,
      performances: ['hoge', 'foo']
    }
  default:
    return state
  }
}
