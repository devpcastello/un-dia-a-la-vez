import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const StaffPanel = ({ cards }) => {
  return (
    <div className='m-auto grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
      {cards.map(({ id, name, image, description }) => (
        <div key={name}>
          <div
            key={id}
            className='relative flex h-[480px] w-[350px] flex-col items-center justify-center rounded-2xl bg-dark-green '
          >
            <div className='mt-10 flex flex-col items-center justify-center'>
              <div className='flex h-[360px] w-[280px] items-center justify-center'>
                <img className=' h-[380px] rounded-xl' src={image} alt={name} />
              </div>
            </div>
            <div>
              <h2 className='mt-5 text-xl font-medium'>{name}</h2>
              <Link to={`/about/staff/${id}`}>
                <p className='text-center text-sm font-light'>Ver más</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

StaffPanel.propTypes = {
  cards: PropTypes.array.isRequired,
};
