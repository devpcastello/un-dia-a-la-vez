import PropTypes from 'prop-types';

export const DescriptionSection = ({
  descriptionImage,
  descriptionTitle,
  description,
}) => {
  return (
    <section className='bg-whispering-white'>
      <div className='m-auto grid w-full grid-cols-1 items-center justify-center gap-8 rounded-b-[60px] bg-tertiary px-5 pb-20 pt-10 text-white sm:rounded-b-[200px] lg:grid-cols-2 lg:px-40'>
        <img
          src={descriptionImage}
          alt={descriptionImage}
          className='order-last m-auto w-56 rounded-2xl sm:order-first'
        />
        <div className='flex flex-col gap-8 md:gap-4'>
          <h2 className='text-center text-xl font-semibold leading-5 md:text-left md:text-xl lg:text-2xl'>
            {descriptionTitle}
          </h2>
          <p className='leading-[18px] lg:leading-[24px]'>{description}</p>
        </div>
      </div>
    </section>
  );
};

DescriptionSection.propTypes = {
  descriptionImage: PropTypes.string.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
