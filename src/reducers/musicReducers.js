import relaxed from '../media/relaxed.mp3'

const music = {
   isMusic : false,
   audio : new Audio(relaxed)

}


const musicControl = (state = music,action) => {
  switch(action.type) {
    case "TOGGLE_MUSIC":
      !state.isMusic ? state.audio.play() : state.audio.pause();
      return {...state, isMusic: !state.isMusic}
    default:
      state.isMusic ? state.audio.play() : state.audio.pause();
      state.audio.volume = 0.02;
      state.audio.loop = true;
      return state
  }
}


export default musicControl;
