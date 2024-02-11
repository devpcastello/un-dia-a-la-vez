import React from "react";

const PeepsLink5 = ({ width, height }) => {
  return (
    <div className="flex flex-row">
      <a
        className="css-peeps"
        target="_blank"
        style={{
          "--peep-head": "sierra",
          "--peep-face": "cute",
          "--peep-accessory": "glasses2",
          "--peep-body": "coffee",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#ff0000",
          "--peep-skin-color": "#b07640",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#eec8a5",
          "--peep-object-color": "#47c82d",
          "--peep-clothes-color": "#47c82d",
          "--peep-flipped": 1,
          "--peep-body-offset-x": "0px",
          "--peep-body-offset-y": "10px",
          display: "inline-block",
          width: `${width}px`, // Usa la variable width
          height: `${height}px`, // Usa la variable height
          background: "white",
        }}
      ></a>
    </div>
  );
};

export default PeepsLink5;
