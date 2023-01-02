const music = true;

const musicControl = (state = music, action) => {
  switch (action.type) {
    case "TOGGLE_MUSIC":
      return !state
      default:
        return state; 
      }
};

export default musicControl;
