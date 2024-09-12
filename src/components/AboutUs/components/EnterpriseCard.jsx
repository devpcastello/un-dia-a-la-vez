import PropTypes from 'prop-types';

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
          className='relative flex h-[250px] max-w-[500px] flex-col items-center justify-center  rounded-full bg-primary'
        >
          <div className='grid  grid-cols-2 items-center justify-center pr-10 lg:max-w-full'>
            <img
              className='size-[250px] rounded-full object-cover '
              src={image}
              alt={name}
            />
            <div className='relative flex h-full flex-col items-center justify-between gap-4 p-5 text-white'>
              <div className='flex h-full flex-col'>
                <h2 className='text-h6 font-medium'>{name}</h2>
                <p className='text-sm'>{shortDescription}</p>
              </div>

              <button
                className='bg-light-blue rounded-full p-1 px-2 text-sm font-medium'
                onClick={() => handleOpenWtpp(name)}
              >
                Contacto
              </button>
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
