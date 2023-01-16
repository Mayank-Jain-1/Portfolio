import CrashText from "../components/CrashText";


export const textToCrash = (str,k) => {
  var result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(<CrashText key={`${k}-${i}`} text={str[i]} className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl' />);
  }
  return result;
};

export const arrayToCrash = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "<br/>") {
      result.push(<br key={i}/>);
    } else if (element.includes("png")) {
      result.push(
        <div key={i} className="inline-block">
          <img
            src={element}
            alt=""
            className=" h-7 sm:h-10 md:h-14 lg:h-20 
          mr-1"
          />
        </div>
      );
    } else {
      var temp = textToCrash(element,i);
      result.push(...temp);
    }
  }
  return result;
};

export const randomMinMax = (min,max) => {
  return  Math.floor(Math.random * (max - min + 1) -min)
}