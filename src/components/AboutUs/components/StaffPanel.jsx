import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from './Modal';

export const StaffPanel = ({ cards }) => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (info) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className='m-auto grid grid-cols-1 gap-20 lg:grid-cols-2'>
      {cards.map(({ id, name, image, shortDescription, fullDescription }) => (
        <div
          key={name}
          className='relative flex max-w-[500px] flex-col items-center justify-center rounded-xl bg-dark-green'
        >
          <div className='grid max-w-[260px] grid-cols-1 items-center justify-center lg:max-w-full lg:grid-cols-2 '>
            <img
              className='max-h-[400px] rounded-t-xl object-contain lg:rounded-l-xl'
              src={image}
              alt={name}
            />
            <div className='relative flex h-full flex-col items-center justify-between gap-4 p-5 text-white'>
              <div className='flex h-full flex-col'>
                <h2 className='text-h6 font-medium'>{name}</h2>
                <p className='text-sm'>{shortDescription}</p>
              </div>
              <button
                className='rounded-full bg-red p-1 px-2 text-sm font-light'
                onClick={() => openModal({ name, image, fullDescription })}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
      {modalInfo && (
        <Modal
          name={modalInfo.name}
          image={modalInfo.image}
          fullDescription={modalInfo.fullDescription}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

StaffPanel.propTypes = {
  cards: PropTypes.array.isRequired,
};
