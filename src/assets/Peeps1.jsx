import React from "react";

const PeepsLink1 = ({ width, height }) => {
  return (
    <a
      className="css-peeps"
      target="_blank"
      style={{
        "--peep-head": "teddy",
        "--peep-face": "peace",
        "--peep-accessory": "glasses3",
        "--peep-facial-hair": "mustache5",
        "--peep-body": "laptop",
        "--peep-hat-color": "#FC03C2",
        "--peep-hair-color": "#47c82d",
        "--peep-skin-color": "#f5e266",
        "--peep-facial-hair-color": "#678ec1",
        "--peep-object-color": "#ff0000",
        "--peep-clothes-color": "#5294c7",
        "--peep-zoom": "1.1",
        "--peep-body-offset-x": "-10px",
        "--peep-body-offset-y": "0px",
        display: "inline-block",
        width: `${width}px`, // Usa la variable width
        height: `${height}px`, // Usa la variable height
        background: "white",
      }}
    ></a>
  );
};

export default PeepsLink1;
