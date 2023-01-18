import React from 'react'
import Codefont from '../components/Codefont'
import {arrayToCrash} from '../functions/crashTextFuncs'


const AboutMe = () => {

  const mainText = ['This is Me']
  const crashTextStyle = 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brandGreen'
  const crashText = arrayToCrash(mainText,crashTextStyle)

  return (
    <section className='h-screen w-screen lg:pl-36'>

      <Codefont text='section' className='tab-0'/>
      <Codefont text='h2' className='tab-1'/>
      <div className='tab-2'>
        {crashText}
      </div>
    </section>
  )
}

export default AboutMe