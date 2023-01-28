import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isVisible } from '../functions/docFunctions';
import mapSm from "../media/mapSM.png";

const Map = () => {
  
  const [animate, setAnimate] = useState(false)
  const {viewHeight,scrollY} = useSelector(store => store.documentInfo)

  const ref = useRef()

  useEffect(() => {
    if(!animate){
      if(isVisible(ref.current,viewHeight,150)){
        setAnimate(true)
      }
    }
  }, [scrollY])  
  
  return (
    <div
        className="border-none lg:w-1/2 m-4 lg:ml-5 lg:mr-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full
      overflow-hidden flex justify-center items-center relative"
      >
        <div ref={ref} className={` absolute  duration-1000 opacity-0 bg-black bg-opacity-90 p-5 m-5 lg:m-12 top-0 left-0 text-white font-franklin text-xs md:text-base ${animate ? ' translate-y-0 opacity-100 animate-fadeIn' : 'translate-y-60'}`}>
          <p>
            Mayank Jain, <br />
            Somewhere in <br />
            Ludhiana, Punjab, India
            <br />
            <br />
            <span className="text-brandGreen">@</span>
            :
            <br />
            mayankjainx404@gmail.com
          </p>
        </div>

        <iframe
          src="https://snazzymaps.com/embed/457201"
          width="100%"
          height="100%"
          className="hidden lg:block  max-h-[1200px] max-w-[1000px]"
        ></iframe>

        <img
          src={mapSm}
          width="1000px"
          height="100%"
          alt=""
          className="max-w-none object-cover lg:hidden"
        />
      </div>
  )
}

export default Map