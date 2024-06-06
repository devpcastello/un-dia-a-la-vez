import React from "react";

const PeepsLink4 = ({ width, height }) => {
  return (
    <div className="flex flex-row">
      <a
        className="css-peeps"
        target="_blank"
        style={{
          "--peep-head": "bangs1",
          "--peep-face": "talking",
          "--peep-body": "explaining",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#ff0000",
          "--peep-skin-color": "#eec8a5",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#eec8a5",
          "--peep-object-color": "#47c84d",
          "--peep-clothes-color": "#47c84d",
          "--peep-flipped": "0",
          "--peep-body-offset-x": "0px",
          "--peep-body-offset-y": "10px",
          display: "inline-block",
          width: `${width}px`,
          height: `${height}px`,
          background: "white",
        }}
      ></a>
    </div>
  );
};

export default PeepsLink4;
