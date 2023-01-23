import React from 'react'
import Mjlogo from '../media/Mjlogo.png'
import Netflix from '../media/Netflix.png'
import PoseMaster from '../media/PoseMaster.png'
import CloudCast from '../media/CloudCast.png'
import NewsMonkey from '../media/NewsMonkey.png'
import SpoonFed from '../media/SpoonFed.png'
import DripX from '../media/DripX.png'
import ImgwallImage from './ImgwallImage'
import Codefont from './Codefont'


const Imgwall = () => {
  return (
    <section>


    <div className='flex flex-wrap my-3'>
      <ImgwallImage src={NewsMonkey} />
      <ImgwallImage src={Netflix} />
      <ImgwallImage src={CloudCast} />
      <ImgwallImage src={PoseMaster} />
      <ImgwallImage src={Mjlogo} className='hidden md:block'/>
      <ImgwallImage src={SpoonFed} />
      <ImgwallImage src={DripX} />
    </div>

    </section>
  )
}

export default Imgwall