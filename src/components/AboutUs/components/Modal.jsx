import PropTypes from 'prop-types';

export const Modal = ({ name, image, fullDescription, onClose }) => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
      <div className='relative mx-auto my-6 w-auto max-w-3xl'>
        <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
          <div className='border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5'>
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <button
              className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none'
              onClick={onClose}
            >
              <span className='block size-6 text-2xl text-black outline-none focus:outline-none'>
                ×
              </span>
            </button>
          </div>
          <div className='relative flex-auto p-6'>
            <img
              className='max-h-[400px] w-full rounded-t object-cover'
              src={image}
              alt={name}
            />
            <div className='mt-5'>
              <p>{fullDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
