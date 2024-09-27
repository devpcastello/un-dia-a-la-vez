import { Button } from '@/components/ui/button';

export const BlogCard = ({ imageDescription, title, description, image }) => {
  return (
    <div
      className='flex flex-col gap-4 border-none text-white md:max-w-2xl'
      id='card1'
    >
      <div className='rounded-xl bg-tertiary'>
        <div className='relative max-w-[1400px] md:w-[600px]'>
          <img
            src={image}
            alt='card image'
            className='h-80 w-full rounded-t-xl object-cover'
          />
          <p className='absolute bottom-0 px-5 py-2 font-semibold'>
            {imageDescription}
          </p>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <Button className='w-fit'>Ver más</Button>
    </div>
  );
};
