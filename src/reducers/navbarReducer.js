const initialState = false;

const navControl = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return !state;
    default:
      return state;
  }
};

export default navControl;
