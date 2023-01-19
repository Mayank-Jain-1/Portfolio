import React from 'react'
import BaseText from '../components/BaseText'
import Codefont from '../components/Codefont'
import {arrayToCrash} from '../functions/crashTextFuncs'


const AboutMe = () => {

  const mainText = ['Me, Myself and I']
  const crashTextStyle = 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brandGreen '
  const crashText = arrayToCrash(mainText,crashTextStyle)

  return (
    <section className='h-screen w-screen lg:pl-36'>

      <Codefont text='section' className='tab-0'/>
        <Codefont text='h2' className='tab-1'/>
          <div className='tab-2'>
            {crashText}
          </div>
        <Codefont text='/h2' className='tab-1'/>

        <Codefont text='p' className='tab-1'/>

        <Codefont text='/p' className='tab-1'/>
        <BaseText>
          Hello I am myanak jain <span>Something else</span>
        </BaseText>
      
    </section>
  )
}

export default AboutMe