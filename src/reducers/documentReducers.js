const initialState = {
  viewHeight: Math.max(document.documentElement.clientHeight, window.innerHeight),
  scrollX: window.scrollX,
  scrollY: window.scrollY,
}

const documentInfo = (state=initialState, action) => {
  switch(action.type){
    case "UPDATE_VIEWHEIGHT":
      return {
        ...state,
        viewHeight: Math.max(document.documentElement.clientHeight, window.innerHeight),
      }
    case "UPDATE_SCROLL":
      return {
        ...state,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      }
    default:
      return state;
  }
}

export default documentInfo