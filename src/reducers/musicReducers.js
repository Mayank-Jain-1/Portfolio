const music = true;

const musicReducer = (state = music, action) => {
  console.log("before change");
  console.log(state); 
  switch (action.type) {
    case "TOGGLE_MUSIC":
      console.log('onchange');
      console.log(!state); 
      return !state
      default:
        return state; 
      }
};

export default musicReducer;
