const initialState = {
  totalNotif: 0,
  notifications: []
}

const notifications = (state=initialState, action) => {
  switch(action.type){
    case "ADD_NOTIFICATION":
      return {
        notifications: [action.props, ...state.notifications],
        totalNotif: totalNotif + 1,
      }
    default:
      return state
  }
}


export default notifications 