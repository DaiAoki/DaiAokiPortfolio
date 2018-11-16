const initialState = {
  currentPath: '/',
  navType: '/history',
}

export default function layoutReducer(state = initialState, action) {
  switch(action.type) {
  default:
    return  {
      ...state,
      currentPath: window.location.pathname,
      navType:     window.location.pathname,
    }
  }
}
