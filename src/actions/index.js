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

export const addNotif = (text, bgColor, textColor) => {
  return {
    type: "ADD_NOTIF",
    props: {
      text: text,
      bgColor: bgColor,
      textColor: textColor
    }
  }
}