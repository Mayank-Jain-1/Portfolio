const initialState = {
  viewHeight: Math.max(document.documentElement.clientHeight, window.innerHeight),
  viewWidth: Math.max(document.documentElement.clientWidth, window.innerWidth),
  scrollX: window.scrollX,
  scrollY: window.scrollY,
}

const documentInfo = (state=initialState, action) => {
  switch(action.type){
    case "UPDATE_SIZE":
      return {
        ...state,
        viewHeight: Math.max(document.documentElement.clientHeight, window.innerHeight),
        viewWidth: Math.max(document.documentElement.clientWidth, window.innerWidth),
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