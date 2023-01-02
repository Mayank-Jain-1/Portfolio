import CrashText from "../components/CrashText";


export const textToCrash = (str) => {
  var result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(<CrashText text={str[i]} />);
  }
  return result;
};

export const arrayToCrash = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "<br/>") {
      result.push(<br />);
    } else if (element.includes("png")) {
      result.push(
        <div className="inline-block">
          <img
            src={element}
            alt=""
            className=" h-7 sm:h-10 md:h-14 lg:h-20 
          mr-1"
          />
        </div>
      );
    } else {
      var temp = textToCrash(element);
      result.push(...temp);
    }
  }
  return result;
};