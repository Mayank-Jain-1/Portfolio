import CrashText from "../components/CrashText";
import CrashTextImage from "../components/CrashTextImage";


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
        <CrashTextImage key={keyVal} src={element} delay={keyVal} />
      );
    } else {
      var temp = textToCrash(element,keyVal,crashTextClassName);
      result.push(...temp);
      keyVal += element.length - 1
    }
  }
  return result;
};
