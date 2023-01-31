import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Notification = ({ textArray, className }) => {
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

  const notifText = []
  for (let i = 0; i < textArray.length; i++) {
    const line = textArray[i];
    notifText.push(<p key={i}>{line}</p>);
    if( textArray.length - i > 2 ) notifText.push(<br/>)
    
  }

  if (present) {
    return (
      <div
        className={`${className} w-full my-1.5 flex-shrink-0 animate-appear p-3 ${
          leave && "translate-x-[120%] duration-100"
        }`}
      >
        {notifText}
      </div>
    );
  }
};

export default Notification;
