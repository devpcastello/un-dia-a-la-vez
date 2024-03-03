import PropTypes from 'prop-types';

export const DescriptionSection = ({
  descriptionImage,
  descriptionTitle,
  description,
}) => {
  return (
    <section className='m-auto grid w-full grid-cols-1 items-center justify-center gap-8 bg-yellow-green px-5 pb-20 pt-10 text-white lg:grid-cols-2 lg:px-40'>
      <img
        src={descriptionImage}
        alt={descriptionImage}
        className='order-last m-auto w-56 sm:order-first'
      />
      <div className='flex flex-col gap-8 md:gap-4'>
        <h2 className='text-center text-h4 font-semibold leading-h4 md:text-left md:text-h6 lg:text-h5'>
          module
          {descriptionTitle}
        </h2>
        <p className='leading-[18px] lg:text-h6 lg:leading-[24px]'>
          {description}
        </p>
      </div>
    </section>
  );
};

DescriptionSection.PropTypes = {
  descriptionImage: PropTypes.string.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
