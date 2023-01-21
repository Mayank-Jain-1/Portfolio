import React from 'react'
import BaseText from '../components/BaseText';
import Codefont from '../components/Codefont';
import { arrayToCrash } from '../functions/crashTextFuncs';

const MyPortfolio = () => {
  const mainText = ["Me, Myself and I"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section className="w-screen lg:h-screen lg:pl-36 lg:pr-7 py-16 relative flex flex-col justify-center">


      <Codefont text='h2' className='tab-1'/>
      <div className='tab-2'>{crashText}</div>
      <Codefont text='/h2' className='tab-1'/>
      <Codefont text='p' className='tab-1'/>
      <BaseText className='tab-2'>
      These are the projects i have been working on in this small period of time.
      </BaseText>
      <Codefont text='/p' className='tab-1'/>
    </section>
  )
}

export default MyPortfolio