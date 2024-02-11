import React from "react";

const PeepsLink3 = ({ width, height }) => {
  return (
    <div className="flex flex-row">
      <a
        className="css-peeps"
        target="_blank"
        style={{
          "--peep-head": "pomp",
          "--peep-face": "smile-big",
          "--peep-body": "shirt-coat",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#47c82d",
          "--peep-skin-color": "#f2c59c",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#eec8a5",
          "--peep-object-color": "#ff0000",
          "--peep-clothes-color": "#000",
          "--peep-body-offset-x": "0px",
          "--peep-body-offset-y": "10px",
          display: "inline-block",
          width: `${width}px`,
          height: `${height}px`,
          background: "white",
        }}
      ></a>

      <a
        className="css-peeps"
        target="_blank"
        style={{
          "--peep-head": "medium-bangs2",
          "--peep-face": "blank",
          "--peep-body": "tee-selena",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#47c82d",
          "--peep-skin-color": "#ffe7d1",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#eec8a5",
          "--peep-object-color": "#47c82d",
          "--peep-clothes-color": "#47c82d",
          "--peep-flipped": "1",
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

export default PeepsLink3;
