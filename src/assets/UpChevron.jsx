const UpChevron = ({ color = "#000", width = 16, height = 10 }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`.cls-1 {
            fill: none;
            stroke: ${color};
          }`}
      </style>
      <path
        d="M1 8L7.24742 0.860087C7.64584 0.404759 8.35417 0.40476 8.75258 0.860087L15 8"
        className="cls-1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UpChevron;
