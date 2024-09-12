import image2 from '../../assets/selfCare/posts/post3.jpg';
import image1 from '../../assets/selfCare/posts/post2.jpg';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/all';
import { blogSectionAnim } from '../../utils/blogSectionAnim';

import { Button } from '@/components/ui/button';

export const BlogSection = () => {
  blogSectionAnim('#card1', 300, 0, 50, 0, 0, 1);
  blogSectionAnim('#card2', -300, 0, 50, 0, 0, 1);

  return (
    <section className='mx-auto flex flex-col items-center bg-secondary px-6 py-16 lg:px-32 lg:py-16'>
      <div className='md:hidden '>
        <h2 id='resources-title' className='mb-12 font-semibold text-white'>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div className='mb-10 text-white'>
          <div className='relative mb-6'>
            <img src={image1} alt='' className='size-full rounded-xl' />
            <p className='text-h6 absolute bottom-0 px-5 py-2 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='text-h5 mb-2 font-bold'>Accede a nuestro blog</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
        <div className='text-white'>
          <div className='bg-light-blue relative mb-6 rounded-xl'>
            <img
              src={image2}
              alt=''
              className='size-full rounded-xl px-5 pt-5'
            />
            <p className='text-h6 px-5 py-2 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='text-h5 mb-2 font-bold'>
            Descarga recursos prácticos
          </h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
      </div>
      <div className='hidden w-full flex-col gap-16 md:flex'>
        <h2 className='mb-12 self-end font-semibold text-white'>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div
          className='mb-10 mr-40 flex flex-col gap-3 self-end text-white md:max-w-[700px]'
          id='card1'
        >
          <div className='relative mb-6 max-w-[1400px] md:w-[600px]'>
            <img
              src={image1}
              alt=''
              className='h-80 w-full rounded-t-xl object-cover'
            />
            <p className='absolute bottom-0 px-5 py-2 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 font-bold'>Accede a nuestro blog</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
        <div
          className='ml-40 self-start text-white md:max-w-[600px]'
          id='card2'
        >
          <div className='bg-light-blue relative mb-6 grid grid-cols-2 overflow-hidden rounded-xl'>
            <img
              src={image2}
              alt=''
              className='order-1 h-80 w-full rounded-t-xl object-cover'
            />
            <p className='text-h6 order-2 self-center px-5 py-2 font-semibold'>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='text-h5 mb-2 font-bold'>
            Descarga recursos prácticos
          </h3>
          <p className='text-base'>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
      </div>
    </section>
  );
};
