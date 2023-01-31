import React from 'react'
import Notification from './Notification'
import { useDispatch, useSelector } from 'react-redux'
import { addNotif } from '../actions'
import { useRef } from 'react'


const Notifications = () => {

  const NotificationsList = useSelector( store => store.notifications.notificationsList)

  const dispatch = useDispatch();
  var notifToDisplay = NotificationsList.map(({text,bgColor,textColor},index) => {
    return <Notification key={index} text={text} bgColor={bgColor} textColor={textColor}/>
  })
    
  const createNotif = () => {
    dispatch(addNotif("Please fill all the fields","bg-red-700", "text-white"));
  } 

  return (
    <div className='z-20 fixed bottom-0 right-0  flex flex-col justify-end '>
      <button onClick={createNotif} className='fixed z-30 top-0 left-0 w-full h-20 bg-blue-400'>Add</button>
      {notifToDisplay}
    </div>
  )
}

export default Notifications