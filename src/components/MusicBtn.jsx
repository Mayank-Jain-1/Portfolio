import React from "react";
import { ImSoundcloud } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../actions/index";

const MusicBtn = () => {

  const music = useSelector( (state) => state.musicControl)
  const dispatch = useDispatch();
  const color = music ? 'brandPurple' : 'brandGreen';

  return (
    <>
      <button
        onClick={() => {
          dispatch(toggleMusic());
        }}
        className={`text-${color} flex items-center p-8`}
      >
        <ImSoundcloud className="text-4xl" />
        <span className="text-white mx-2">Music</span>
        <span className="">{music ? 'ON' : 'OFF' }</span>
      </button>
    </>
  );
};

export default MusicBtn;
