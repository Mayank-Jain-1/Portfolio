import React, { createRef, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Tagcloud from './Tagcloud'

// const SkillsSphere = () => {

//   const [phaseXY, setPhaseXY] = useState(0)
//   const [phaseZ, setPhaseZ] = useState(0)


//   // const temp = []
//   // for (let i = 0; i < 90; i++) {
//   //   temp.push(
//   //     <ElemSphereElement key={i} elemPhaseXY={-i} elemPhaseZ={0} phaseXY={phaseXY} phaseZ={phaseZ} name="."/>
//   //   )
//   // }
//   useEffect(() => {
//     const rotate = setInterval(() => {
//       // setPhaseXY(phaseXY + 0.5);
//       setPhaseZ(phaseZ + 0.5);
//     }, 1000/100);
  
//     return () => {
//       clearTimeout(rotate)
//     }
//   }, [phaseXY,phaseZ])
  

//   return (
//     <div className='bg-neutral-600 w-96 h-96 relative'>
      

//     <ElemSphereElement elemPhaseXY={0} elemPhaseZ={0} phaseXY={phaseXY} phaseZ={phaseZ} name="1"/>
// {/* 
//     {temp} */}

//     <ElemSphereElement elemPhaseXY={90} elemPhaseZ={0} phaseXY={phaseXY} phaseZ={phaseZ} name="2"/>
//     <ElemSphereElement elemPhaseXY={180} elemPhaseZ={0} phaseXY={phaseXY} phaseZ={phaseZ} name="3"/>
//     <ElemSphereElement elemPhaseXY={270} elemPhaseZ={0} phaseXY={phaseXY} phaseZ={phaseZ} name="4"/>
//     <ElemSphereElement elemPhaseXY={0} elemPhaseZ={90} phaseXY={phaseXY} phaseZ={phaseZ} name="5"/>
//     <ElemSphereElement elemPhaseXY={0} elemPhaseZ={270} phaseXY={phaseXY} phaseZ={phaseZ} name="6"/>
//     <ElemSphereElement elemPhaseXY={45} elemPhaseZ={45} phaseXY={phaseXY} phaseZ={phaseZ} name="7"/>
//     <ElemSphereElement elemPhaseXY={225} elemPhaseZ={45} phaseXY={phaseXY} phaseZ={phaseZ} name="8"/>
//     {/* <ElemSphereElement elemPhaseXY={0} elemPhaseZ={270} phaseXY={phaseXY} phaseZ={phaseZ} name="9"/>
//     <ElemSphereElement elemPhaseXY={0} elemPhaseZ={270} phaseXY={phaseXY} phaseZ={phaseZ} name="10"/> */}
//     </div>
//   )
// }

const TagcloudDiv = ({className,textStyle}) => {
  
  // const windowWidth = useSelector(store => store.documentInfo)
  // console.log('windowWidth: ', windowWidth);
  var divRef = createRef();
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }


  useEffect(() => {
    setWidth(divRef.current.clientWidth)
    window.addEventListener('resize',updateWindowWidth)
    return () => {
      window.removeEventListener('resize',updateWindowWidth)
    }
  }, [windowWidth])
  

  return(
  <div ref={divRef} className={className} >
    <Tagcloud parentWidth={width} textStyle={textStyle}/>
  </div>
  )

}

export default TagcloudDiv