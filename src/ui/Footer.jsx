// import FullLogo from '../assets/FullLogo';
import FullLogo from '../assets/FullLogo.svg';
import { contactInfo } from '../data/contactInfo';
import { socialMedia } from '../data/socialMedia';

export const Footer = () => {
  return (
    <section className='flex flex-col items-center justify-items-end'>
      <div className='grid w-10/12 flex-col items-center justify-center gap-10 py-20 lg:grid-cols-3 lg:items-start'>
        <div className=''>
          <div className='h-28 w-40'>
            <img
              className='max-h-[120px] min-w-[360px]'
              src={FullLogo}
              alt=''
            />
            <p>Un día a la vez, centro psicológico</p>
          </div>
        </div>
        <div className='border-b-2 border-slate-700 lg:hidden lg:border-r-2'></div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='mb-5 text-h6 font-bold'>Ubicanos:</p>
          <div className='flex w-full flex-col justify-around gap-10 px-5'>
            {contactInfo.map(({ description, image, link }) => (
              <section
                key={description}
                className='flex flex-row items-center gap-5'
              >
                <img className='w-6' src={image} alt={name} />
                <a href='#'>{description}</a>
              </section>
            ))}
          </div>
        </div>
        <div className='border-b-2 border-slate-700 lg:hidden lg:border-r-2'></div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='mb-5 text-h6 font-bold'>Redes sociales:</p>
          <div className='flex w-full flex-col justify-around gap-10 px-5'>
            {socialMedia.map(({ title, image, link }) => (
              <section key={title} className='flex flex-row items-center gap-5'>
                <img className='w-6' src={image} alt={title} />
                <a href='#'>{title}</a>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className='flex h-20 w-full flex-row items-center justify-center gap-3 bg-slate-900 p-5 text-white'>
        <p>2024</p>
        <p>Todos los derechos reservados</p>
      </div>
    </section>
  );
};
