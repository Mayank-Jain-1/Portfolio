import React from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";

const Tagcloud = ({ parentWidth, textStyle }) => {
  const options = {
    radius: parentWidth / 2,
  };

  return (
    <TagCloud options={options} className={textStyle}>
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
  );
};

export default Tagcloud;
