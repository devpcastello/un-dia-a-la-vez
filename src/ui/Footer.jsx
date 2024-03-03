import logo from '../assets/navbar-logo.png';
import facebook from '../assets/icon _facebook_.png';
import instagram from '../assets/icon _instagram_.png';
import youtube from '../assets/icon _youtube_.png';

export const Footer = () => {
  return (
    <div className='flex h-[500px] flex-col justify-items-end'>
      <div className='flex h-[500px] flex-col items-center justify-center  gap-6'>
        <div className='border-b-2 border-slate-700 pb-5'>
          <img className='mt-5 max-h-[120px] min-w-[360px]' src={logo} alt='' />
        </div>
        <div>
          <p className='mb-3'>Conoce nuestras redes sociales:</p>
          <div className=' mb-2 flex h-10 w-full flex-row justify-around'>
            <img className='size-10' src={facebook} alt='' />
            <img className='h-10 w-12' src={youtube} alt='' />
            <a href='https://www.instagram.com/undiaalavezpsico/'>
              <img className='size-10' src={instagram} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='flex h-20 w-full flex-row items-center justify-start gap-5 bg-slate-900 p-5 text-white'>
        <p>2024</p>
        <p>Todos los derechos reservados</p>
      </div>
    </div>
  );
};
