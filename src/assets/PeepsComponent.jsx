import React from "react";
const PeepsLink = () => {
  return (
    <a
      className="css-peeps"
      href="https://css-peeps.com/"
      target="_blank"
      style={{
        "--peep-head": "hijab",
        "--peep-face": "smile-gap",
        "--peep-facial-hair": "chinhair",
        "--peep-body": "pointing-up",
        "--peep-hat-color": "#FC03C2",
        "--peep-hair-color": "#7300E6",
        "--peep-skin-color": "#87ceeb",
        "--peep-accessory-color": "#00ff00",
        "--peep-facial-hair-color": "#ffd700",
        "--peep-object-color": "#ffa500",
        "--peep-clothes-color": "#ff0000",
        display: "inline-block",
        width: "362px",
        height: "487px",
        background: "white",
        borderRadius: "10px",
        border: "2px solid var(--peep-accessory-color)",
      }}
    ></a>
  );
};

export default PeepsLink;
