import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { useSelector } from "react-redux";

const Notifications = () => {
  const [notifToDisplay, setNotifToDisplay] = useState([]);
  const NotificationsList = useSelector(
    (store) => store.notifications.notificationsList
  );
  const totalNotif = useSelector((store) => store.notifications.totalNotif);
  // var notifToDisplay = NotificationsList.map(({textArray,className}) => {
  //   return <Notification key={totalNotif} textArray={textArray} className={className}/>
  // })

  useEffect(() => {
    if (totalNotif) {
      const { textArray, className } = NotificationsList[0];
      // console.log('{textArray,className}: ', {textArray,className});
      setNotifToDisplay([
        ...notifToDisplay,
        <Notification
          key={totalNotif}
          textArray={textArray}
          className={className}
        />,
      ]);
      console.log(notifToDisplay);
    }
  }, [totalNotif]);

  return (
    <div className="z-20 fixed bottom-0 right-0  flex flex-col items-end justify-end">
      {notifToDisplay}
    </div>
  );
};

export default Notifications;
