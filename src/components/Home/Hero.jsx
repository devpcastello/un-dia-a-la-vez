import dulcinea from '../../assets/dulcinea-1.png';
import blob from '../../assets/blob.svg';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/home-background-image.jpg';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <main
      className='relative flex h-screen w-full flex-col items-center justify-center gap-20 bg-center text-white md:gap-8'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className=''>
        <h2 className='text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
          Una terapia enfocada en el ser humano
        </h2>
      </div>
      <div className='bg-slate-400/20s absolute inset-0 size-full' />
      <div className=' relative'>
        <div className='relative z-10 flex h-1/2 w-auto items-center justify-center md:mt-[150px]'>
          <img
            className='animate__animated animate__fadeInUp absolute -z-10 w-[400px] max-w-80 md:min-h-[500px] md:min-w-[500px] xl:min-h-[700px] xl:min-w-[700px]'
            src={blob}
            alt=''
          />
          <img
            className='animate__animated animate__fadeInUp size-40 md:min-h-[230px] md:min-w-[230px] xl:min-h-[300px] xl:min-w-[300px]'
            src={dulcinea}
            alt=''
          />
        </div>
      </div>
      <Button className='absolute bottom-10 z-20 text-base hover:bg-accent'>
        <Link to='/service/terapia-online'>¿Empezamos tu proceso?</Link>
      </Button>
    </main>
  );
};
