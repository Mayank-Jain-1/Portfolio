import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { useSelector } from "react-redux";

const Notifications = () => {
  const [notifToDisplay, setNotifToDisplay] = useState([]);
  const NotificationsList = useSelector(
    (store) => store.notifications.notificationsList
  );
  const totalNotif = useSelector((store) => store.notifications.totalNotif);

  useEffect(() => {
    if (totalNotif) {
      const { textArray, className } = NotificationsList[0];
      setNotifToDisplay([
        ...notifToDisplay,
        <Notification
          key={totalNotif}
          textArray={textArray}
          className={className}
        />,
      ]);
    }
    //eslint-disable-next-line
  }, [totalNotif]);

  return (
    <div className="z-20 fixed bottom-0 right-0  flex flex-col items-end justify-end pb-14">
      {notifToDisplay}
    </div>
  );
};

export default Notifications;
