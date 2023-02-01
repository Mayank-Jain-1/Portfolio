import React from "react";
import { ImSoundcloud } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../actions/index";

const MusicBtn = () => {

  const dispatch = useDispatch();
  const isMusic = useSelector( (state) => state.musicControl.isMusic)
  const textColor = !isMusic ? 'text-brandPurple' : 'text-brandGreen';
  
  return (
    <>
      <button
        onClick={() => {
          dispatch(toggleMusic());
        }}
        className={`${textColor} flex items-center px-2 h-7 md:h-9 lg:h-12 text-xs md:text-base bg-dark bg-opacity-70 rounded`}
      >
        <ImSoundcloud className="text-2xl md:text-4xl" />
        <span className="text-white mx-2">Music</span>
        <span>{isMusic ? 'ON' : 'OFF'}</span>
      </button>
    </>
  );
};

export default MusicBtn;
