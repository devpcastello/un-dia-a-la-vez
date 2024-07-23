import PropTypes from 'prop-types';
import { useState } from 'react';

export const Modal = ({ image, fullDescription, onClose }) => {
  const [keyName, setKeyName] = useState('');
  const [name, setName] = useState('');
  const isValidNumber = (input) => /^\d{9}$/.test(input);

  const handleOpenWtpp = () => {
    window.open(
      `https://wa.me/+51923022460?text=${encodeURIComponent(`${wtppMessage}`)}`,
      '_blank',
    );
  };

  const wtppMessage = `Hola, soy ${name}. Estoy interesado en llevar sesiones de terapia online.`;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-500 bg-opacity-30 outline-none focus:outline-none'>
      <div className='relative mx-auto my-6 w-10/12  md:w-8/12 lg:w-1/3'>
        <div className=' bg-dark-green relative flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none'>
          <div className='flex items-start justify-between rounded-t border-b border-solid p-5'>
            <h2 className='text-h6 lg:text-h5 font-semibold text-white'>
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
              className='bg-light-blue rounded-full border-none px-4 py-2 text-white  placeholder:text-white'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='Whatsapp'
              className='bg-light-blue rounded-full border-none px-4 py-2 text-white placeholder:text-white'
              onChange={(e) => {
                setKeyName(e.target.value);
              }}
            />
            <button
              className='bg-red rounded-full px-4 py-2 text-white hover:font-bold'
              onClick={handleOpenWtpp}
            >
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
