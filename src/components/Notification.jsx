import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Notification = ({ text, bgColor, textColor }) => {
  const timeToDisplay = 5000
  const leaveTime = 100
  const [leave, setLeave] = useState(false);
  const [present, setPresent] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLeave(true);
    }, timeToDisplay);

    setTimeout(() => {
      setPresent(false)
    }, timeToDisplay + leaveTime);
  }, []);

  if (present) {
    return (
      <div
        className={`${bgColor} ${textColor} w-full my-1.5 flex-shrink-0 animate-appear p-3 ${
          leave && "translate-x-[120%] duration-100"
        }`}
      >
        {text}
      </div>
    );
  }
};

export default Notification;
