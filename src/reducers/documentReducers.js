const initialState = {
  clientHeight:  document.documentElement.clientHeight,
  windowHeight: window.innerHeight,
  scrollX: window.scrollX,
  scrollY: window.scrollY,
}

const documentInfo = (state=initialState, action) => {
  switch(action.type){
    case "UPDATE_CLIENTHEIGHT":
      return {
        ...state,
        clientHeight: document.documentElement.clientHeight
      }
    case "UPDATE_WINDOWHEIGHT":
      return {
        ...state,
        windowHeight: window.innerHeight
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