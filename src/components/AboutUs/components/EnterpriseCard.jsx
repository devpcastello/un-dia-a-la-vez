import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';

export const EnterpriseCards = ({ cards }) => {
  const handleOpenWtpp = (name) => {
    window.open(
      `https://wa.me/+51923022460?text=${encodeURIComponent(`Hola, me gustaría agendar una cita con ${name}.`)}`,
      '_blank',
    );
  };

  return (
    <div className='m-auto grid grid-cols-1 gap-20 lg:grid-cols-2'>
      {cards.map(({ id, name, image, shortDescription }) => (
        <div
          key={name}
          className='relative flex h-64 max-w-lg flex-col items-center justify-center rounded-full bg-primary'
        >
          <div className='flex items-center justify-center gap-3 lg:max-w-full'>
            <img
              className='aspect-square size-64 rounded-full object-cover'
              src={image}
              alt={name}
            />
            <div className='relative flex h-64 flex-col items-start justify-between gap-4 py-4 text-white'>
              <div className='flex flex-col gap-3'>
                <h2 className='text-lg font-medium'>{name}</h2>
                <p className='w-10/12 text-sm'>{shortDescription}</p>
              </div>

              <Button variant='secondary' onClick={() => handleOpenWtpp(name)}>
                Contactar
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

EnterpriseCards.propTypes = {
  cards: PropTypes.array.isRequired,
};
