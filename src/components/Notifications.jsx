import React from 'react'
import Notification from './Notification'
import { useSelector } from 'react-redux'


const Notifications = () => {

  const NotificationsList = useSelector( store => store.notifications.notificationsList)
  var notifToDisplay = NotificationsList.map(({textArray,className},index) => {
    return <Notification key={index} textArray={textArray} className={className}/>
  })
    

  return (
    <div className='z-20 fixed bottom-0 right-0  flex flex-col justify-end '>
      {notifToDisplay}
    </div>
  )
}

export default Notifications