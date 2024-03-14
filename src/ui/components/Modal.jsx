import PropTypes from 'prop-types';

export const Modal = ({ name, image, fullDescription, onClose }) => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-500 bg-opacity-30 outline-none focus:outline-none'>
      <div className='relative mx-auto my-6 w-10/12  md:w-8/12 lg:w-1/3'>
        <div className=' relative flex w-full flex-col rounded-lg border-0 bg-dark-green shadow-lg outline-none focus:outline-none'>
          <div className='flex items-start justify-between rounded-t border-b border-solid p-5'>
            <h2 className='text-h6 font-semibold text-white lg:text-h5'>
              Estamos aquí para ayudarte
            </h2>
            <button
              className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none'
              onClick={onClose}
            >
              <span className='block size-6 text-2xl text-black outline-none focus:outline-none'>
                ×
              </span>
            </button>
          </div>
          <div className='flex flex-col gap-5 p-6'>
            <input
              type='text'
              placeholder='Nombre'
              className='rounded-full border-none bg-light-blue py-2 placeholder:px-4 placeholder:text-white'
            />
            {/* <input
              type='text'
              placeholder='Email'
              className='rounded-full border-none bg-light-blue py-2 placeholder:px-4 placeholder:text-white'
            /> */}
            <input
              type='text'
              placeholder='Whatsapp'
              className='rounded-full border-none bg-light-blue py-2 placeholder:px-4 placeholder:text-white'
            />
            <button className='rounded-full bg-red px-4 py-2 text-white hover:font-bold'>
              Solicitar ayuda
            </button>
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
