const initialState = {
  totalNotif: 0,
  notificationsList: []
}

const notifications = (state=initialState, action) => {
  switch(action.type){
    case "ADD_NOTIFICATION":
      return {
        notificationsList: [action.props, ...state.notificationsList],
        totalNotif: state.totalNotif + 1,
      }
    default:
      return state
  }
}


export default notifications 