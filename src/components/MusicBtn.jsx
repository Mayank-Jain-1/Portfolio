import React from "react";
import { ImSoundcloud } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toggleMusic } from "../actions/index";

const MusicBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(toggleMusic());
        }}
        className="text-brandPurple flex items-center p-8"
      >
        <ImSoundcloud className="text-4xl" />
        <span className="text-white mx-2">Music</span>
        <span className="">OFF</span>
      </button>
    </>
  );
};

export default MusicBtn;
