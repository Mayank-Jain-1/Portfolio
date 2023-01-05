import React from "react";
import { ImSoundcloud } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../actions/index";

const MusicBtn = () => {

  const music = useSelector( (state) => state.musicControl)
  const dispatch = useDispatch();
  const textColor = !music ? 'text-brandPurple' : 'text-brandGreen';

  return (
    <>
      <button
        onClick={() => {
          dispatch(toggleMusic());
        }}
        className={`${textColor} flex items-center p-3 h-12 text-xs md:text-base`}
      >
        <ImSoundcloud className="text-2xl md:text-4xl" />
        <span className="text-white mx-2">Music</span>
        <span>{music ? 'ON' : 'OFF'}</span>
      </button>
    </>
  );
};

export default MusicBtn;
