import React from "react";
import TagCloud from '@frank-mayer/react-tag-cloud'

// const ElemSphereElement = ({
//   elemPhaseXY,
//   elemPhaseZ,
//   phaseXY,
//   phaseZ,
//   name,
// }) => {


//   const degToRad = (angle) => {
//     return angle * (Math.PI / 180);
//   };
//   const abs = (val) => {
//     return Math.abs(val);
//   };
//   const root = (val) => {
//     return Math.sqrt(val);
//   }
//   const sq = (val) => {
//     return Math.pow(val,2);
//   }
//   const sin = (deg) => {
//     return Math.sin(degToRad(deg));
//   }
//   const cos = (deg) => {
//     return Math.cos(degToRad(deg));
//   }
//   const tan = (deg) => {
//     return Math.tan(degToRad(deg));
//   }

//   const perp = (base) => {
//     return root(1 - base*base)
//   }

//   const limit = (val,base,max) => {
//     return val*root(max*max - base*base)/max
//   }
//   // RsinX and RsinZ move from -50 to 0 or 0 to 50 depending upon the phase

//   var sinX = sin(elemPhaseXY + phaseXY);
//   var sinZ = sin(elemPhaseZ + phaseZ);
//   var cosZ = cos(elemPhaseZ + phaseZ);
//   var cosXY = cos(elemPhaseXY + phaseXY);


//   const effectiveXY = (1 - sinZ) * elemPhaseXY + phaseXY;
//   const effectiveZ = (1 - sinX) * (elemPhaseZ + phaseZ);

//   var RsinX = sinX * 50;
//   var RsinZ = sinZ * 50;
//   var RcosZ = cosZ * 50;
//   if (elemPhaseXY > 90 || elemPhaseXY < -90) {
//     RsinZ *= -1;
//   }

//   // const TanZ = Math.tan(deg(elemPhaseZ + phaseZ))
//   const left = 50 + 
//   RsinX * cosZ
//   // RsinX * (1 - abs(sinZ));
//   // RsinX*((Math.abs(RsinZ) - 50)/50)
//   const top = 50 - 
//   RsinZ
//   // RsinZ * (1 - abs(sinX));
//   // RsinZ*((Math.abs(RsinX) - 50)/50) ;

//   if (name === "8") {
//     console.clear();
//     // limit(sinX,sinZ,50)
//     var x = phaseXY + elemPhaseXY
    
//     console.log('RsinX: ', RsinX,'RsinZ: ', RsinZ);
//     // console.log('perp: ', cos(x));
//     // console.log('base: ', sin(x));
//     // console.log("elemPhaseZ: ", elemPhaseZ);
//     // console.log("elemPhaseXY: ", elemPhaseXY);
//     // console.log("sinX: ", sinX, "sinZ: ", sinZ);
//     // console.log("effectiveXY: ", effectiveXY, "effectiveZ: ", effectiveZ);
//   }

//   return (
//     <div
//       style={{
//         top: `${top}%`,
//         left: `${left}%`,
//       }}
//       className="absolute text-3xl text-brandGreen -translate-x-1/2 -translate-y-1/2"
//     >
//       {name}
//     </div>
//   );
// };


// export default ElemSphereElement;


const Tagcloud = ({parentWidth,textStyle}) => {

  const options = {
    radius : parentWidth/2,
  }

  return(
    <TagCloud
    options={options}
    className={textStyle}
>
    {[
        "JavaScript",
        "React",
        "MySQL",
        "Node",
        "Express",
        "Boostrap",
        "C++",
        "Pyhton",
        "Tailwind",
        "Git",
        "GitHub",
        "HTML5",
        "CSS",
        "MongoDB",
    ]}
</TagCloud>
  )

}

export default Tagcloud