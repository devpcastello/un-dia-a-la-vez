import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from './Modal';

import { Button } from '@/components/ui/button';

export const StaffPanel = ({ cards }) => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (info) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  const handleOpenWtpp = (name) => {
    window.open(
      `https://wa.me/+51923022460?text=${encodeURIComponent(`Hola, me gustaría agendar una cita con ${name}`)}`,
      '_blank',
    );
  };

  return (
    <div className='m-auto grid grid-cols-1 gap-20 lg:grid-cols-2'>
      {cards.map(({ id, name, image, shortDescription, fullDescription }) => (
        <div
          key={name}
          className='relative flex max-w-[500px] flex-col items-center justify-center rounded-xl bg-primary'
        >
          <div className='grid max-w-96 grid-cols-1 items-center justify-center lg:max-w-full lg:grid-cols-2 '>
            <img
              className='h-[350px] rounded-t-xl object-cover lg:rounded-l-xl lg:rounded-tr-none'
              src={image}
              alt={name}
            />
            <div className='relative flex h-full flex-col items-end justify-between gap-4 p-4 text-white'>
              <div className='flex h-full flex-col gap-3'>
                <h2 className='text-lg font-medium'>{name}</h2>
                <p className='text-sm'>{shortDescription}</p>
              </div>
              <div className='flex  gap-4'>
                {/* <Button
                  variant={'ghost'}
                  className=''
                  onClick={() => openModal({ name, image, fullDescription })}
                >
                  Ver más
                </Button> */}
                <Button variant={'accent'} onClick={() => handleOpenWtpp(name)}>
                  Solicitar sesión
                </Button>
              </div>
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
