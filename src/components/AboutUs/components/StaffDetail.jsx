import { useParams } from 'react-router-dom';
import { staff } from '../../../data/staff';

export const StaffDetail = () => {
  const { index } = useParams();
  const { name, image, description } = staff.find(
    (p) => p.id === parseInt(index),
  );

  return (
    <div className='flex h-auto w-full flex-col items-center justify-center gap-8 p-8 pt-14'>
      {name ? (
        <>
          <h2 className='text-4xl font-bold text-gray-10'>{name}</h2>
          <div className=' flex h-[360px] w-[280px] items-center justify-center'>
            <img className='h-[380px]' src={image} alt='' />
          </div>
          <p className='font-light text-gray-8'>{description}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </>
      ) : undefined}
    </div>
  );
};
