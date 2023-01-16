
import CrashText from "../components/CrashText";


export const textToCrash = (str,k,crashTextClassName) => {
  var result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(<CrashText key={`${k + i}`} text={str[i]} className={crashTextClassName} delay={k+i} />);
  }
  return result;
};

export const arrayToCrash = (array,crashTextClassName) => {
  let keyVal = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    keyVal++;
    if (element === "<br/>") {
      result.push(<br key={keyVal}/>);
    } else if (element.includes("png")) {
      result.push(
        <div key={keyVal} className="inline-block">
          <img
            src={element}
            alt=""
            className=" h-7 sm:h-10 md:h-14 lg:h-20 
            mr-1"
            />
        </div>
      );
    } else {
      var temp = textToCrash(element,keyVal,crashTextClassName);
      result.push(...temp);
      keyVal += element.length - 1
    }
  }
  return result;
};
