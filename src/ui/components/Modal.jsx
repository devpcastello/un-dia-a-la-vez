import PropTypes from 'prop-types';

export const Modal = ({ name, image, fullDescription, onClose }) => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-500 bg-opacity-30 outline-none focus:outline-none'>
      <div className=' relative mx-auto my-6 w-10/12 md:w-8/12'>
        <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
          <div className='flex items-start justify-between rounded-t border-b border-solid p-5'>
            <h2 className='text-3xl font-semibold'>
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
          <div className='flex flex-col p-6'>
            <input type='text' placeholder='Nombre' />
            <input type='text' placeholder='Email' />
            <input type='text' placeholder='Whatsapp' />
            <button>Solicitar ayuda</button>
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
