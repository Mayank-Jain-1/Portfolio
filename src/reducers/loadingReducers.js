const initial = true;

const loading = (state = initial,action) => {
  switch(action.type){
    case "SET_LOADING":
      return action.value;
    default:
      return state;
  }
}

export default loading;