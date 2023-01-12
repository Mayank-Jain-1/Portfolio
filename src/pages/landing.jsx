import React from 'react'
import Codefont from '../components/Codefont'
import CrashText from '../components/CrashText'


const landing = () => {

  const mainText1 = 'Hi,'
  const mainText2 = "I'm    ayank Jain,"
  const mainText3 = "web developer"
  const convertToCrash = (str) => {
    var result = []
    for (let i = 0; i < str.length; i++) {
      result.push(<CrashText text={str[i]}/>)
    }
    return result
  }
  const crash1 = convertToCrash(mainText1);
  const crash2 = convertToCrash(mainText2);
  console.log(crash2);
  const crash3 = convertToCrash(mainText3);

  return (
    <div className='pt-20
     px-4'>
      <Codefont text='body'/>
      <div>
      <Codefont text='h1' />
      
      {crash1}
      <br />
      {crash2}
      <br />
      {crash3}


      <Codefont text='/h1' />
      </div>
      
    </div>
  )
}

export default landing