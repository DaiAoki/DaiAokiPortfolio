export const changeHistory = (id, cnt) => {
  return(dispatch, getState) => {
    const maxId = getState().subItemReducer.subItems['/history'].length
    var nextId = id + cnt
    if(nextId === 0) {
      nextId = maxId
    }
    else if(nextId > maxId){
      nextId = 1
    }
    dispatch({type: 'CHANGE_HISTORY', id: nextId})
  }
}
