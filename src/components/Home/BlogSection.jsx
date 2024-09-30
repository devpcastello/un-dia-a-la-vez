import { BlogCard } from './BlogCard';
import { homeResourcesCards } from '../../data/homeResources';

export const BlogSection = () => {
  return (
    <section className='mx-auto flex flex-col items-center bg-whispering-white px-6 py-16 text-twilight-navy lg:px-32 lg:py-16'>
      {/* <div className='md:hidden '>
        <h2 id='resources-title' className='mb-12 font-semibold text-white'>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div className='mb-10 bg-tertiary text-white'>
          <div className='relative mb-6'>
            <img
              src={image1}
              alt='blog image'
              className='size-full rounded-xl'
            />
            <p className='absolute bottom-0 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 text-xl font-bold'>Accede a test nuestro blog</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
        <div className='text-white'>
          <div className='relative mb-6 rounded-xl bg-tertiary'>
            <img
              src={image2}
              alt=''
              className='size-full rounded-xl px-5 pt-5'
            />
            <p className='px-5 py-2 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className=' mb-2 font-bold'>Descarga recursos prácticos</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <Button>Ver más</Button>
        </div>
      </div> */}
      <div className='flex w-full flex-col gap-16'>
        <h2 className='self-end text-2xl font-semibold '>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div className='flex flex-col justify-between gap-6 sm:flex-row'>
          {homeResourcesCards.map((card) => {
            console.log(card);
            return (
              <BlogCard
                key={card.title}
                imageDescription={card.imageDescription}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
