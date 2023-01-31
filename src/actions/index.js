export const toggleMusic = () => {
  return {
    type: "TOGGLE_MUSIC",
  };
};

export const startMusic = () => {
  return {
    type: "START_MUSIC",
  };
};

export const stopMusic = () => {
  return {
    type: "STOP_MUSIC",
  };
};

export const toggleNav = () => {
  return {
    type: "TOGGLE_NAV",
  };
};


export const updateSize = () => {
  return {
    type: "UPDATE_SIZE"
  }
}

export const updateScroll = () => {
  return {
    type: "UPDATE_SCROLL"
  }
}

export const addNotif = (textArray,className) => {
  return {
    type: "ADD_NOTIFICATION",
    props: {
      textArray: textArray,
      className: className
    }
  }
}