import React from 'react'
import Mjlogo from '../media/Mjlogo.png'
import ImgwallImage from './ImgwallImage'
import Codefont from './Codefont'


const Imgwall = () => {
  return (
    <section>
    <Codefont text={'section'} className='tab-1'/>


    <div className='flex flex-wrap my-3'>
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} />
      <ImgwallImage src={Mjlogo} className='hidden md:flex'/>
    </div>

    <Codefont text={'/section'} className='tab-1'/>
    </section>
  )
}

export default Imgwall