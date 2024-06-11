// import FullLogo from '../assets/FullLogo';
import FullLogo from '../assets/FullLogo.svg';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { contactInfo } from '../data/contactInfo';
import { socialMedia } from '../data/socialMedia';

export const Footer = () => {
  return (
    <section className='flex flex-col items-center justify-items-end'>
      <div className='grid w-10/12 flex-col items-center justify-center gap-12 py-20 lg:grid-cols-4 lg:items-start'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <img className='' src={FullLogo} alt='' />
          <p className='w-full text-sm font-thin'>
            Un día a la vez, centro psicológico con filosofía centrada en la
            persona que integra metodologías científicas para brindar
            tratamientos psicológicos eficaces.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='text-h6 mb-5 font-bold'>
            Subscríbete a nuestro News Letter
          </p>
          <div className='flex w-full flex-col gap-4'>
            <Input placeholder={'Ingrese su nombre'} />
            <Input placeholder={'Ingrese su email'} />
            <Button>Suscribirse</Button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='text-h6 mb-5 font-bold'>Ubícanos</p>
          <div className='flex w-full flex-col justify-around gap-6 px-5'>
            {contactInfo.map(({ description, image, link }) => (
              <section
                key={description}
                className='flex flex-row items-center gap-4'
              >
                <img className='w-6' src={image} alt={name} />
                <a href='#' className='text-sm font-thin'>
                  {description}
                </a>
              </section>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='text-h6 mb-5 font-bold'>Redes sociales</p>
          <div className='flex w-full flex-col justify-around gap-6 px-5'>
            {socialMedia.map(({ title, image, link }) => (
              <section key={title} className='flex flex-row items-center gap-4'>
                <img className='w-6' src={image} alt={title} />
                <a href='#' className='text-sm font-thin'>
                  {title}
                </a>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className='flex h-10 w-full flex-row items-center justify-center gap-3 bg-slate-900 p-5 text-white'>
        <p>2024</p>
        <p>Todos los derechos reservados</p>
      </div>
    </section>
  );
};
