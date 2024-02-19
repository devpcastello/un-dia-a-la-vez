import React from "react";

const PeepsLink2 = ({ width, height }) => {
  return (
    <div className="flex flex-row">
      <a
        className="css-peeps"
        target="_blank"
        style={{
          "--peep-head": "beanie",
          "--peep-face": "talking",
          "--peep-body": "pointing-up",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#7300E6",
          "--peep-skin-color": "#87ceeb",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#ffd700",
          "--peep-object-color": "#47c82d",
          "--peep-clothes-color": "#47c82d",
          "--peep-body-offset-x": "0px",
          "--peep-body-offset-y": "0px",
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
          "--peep-head": "long-curly",
          "--peep-face": "eating-happy",
          "--peep-body": "explaining",
          "--peep-hat-color": "#ff0000",
          "--peep-hair-color": "#ff0000",
          "--peep-skin-color": "#b7885c",
          "--peep-accessory-color": "#00ff00",
          "--peep-facial-hair-color": "#eec8a5",
          "--peep-object-color": "#47c82d",
          "--peep-clothes-color": "#47c82d",
          "--peep-flipped": "1",
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

export default PeepsLink2;
