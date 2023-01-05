import React from 'react'
import Codefont from '../components/Codefont'
import CrashText from '../components/CrashText'


const landing = () => {
  return (

    <div className='pt-20
     px-4'>
      <Codefont text='body'/>
      <div>
      <Codefont text='h1' />
      <CrashText text={'H'} />
      <CrashText text={'H'} />
      <CrashText text={'H'} />
      <Codefont text='/h1' />
      </div>

    </div>
  )
}

export default landing