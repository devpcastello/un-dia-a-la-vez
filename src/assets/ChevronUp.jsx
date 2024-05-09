const ChevronUp = ({
  color = '#000',
  width = 20,
  height = 12,
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox='0 0 16 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <style>
        {`.chevron-up {
            fill: block;
            stroke: ${color};
            stroke-width: ${strokeWidth};
          }`}
      </style>
      <path
        d='M1 8L7.24742 0.860087C7.64584 0.404759 8.35417 0.40476 8.75258 0.860087L15 8'
        className='chevron-up'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronUp;
