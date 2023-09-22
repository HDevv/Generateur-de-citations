import React from "react";
import AnimatedCursor from "react-animated-cursor";

const mouse = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color="197,226,207" // RGB
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default mouse;
