import { BlogCard } from '../Home/BlogCard';

export const Blog = () => {
  return (
    <section className='h-auto w-full py-14'>
      <div className=' flex h-fit w-full flex-col gap-8 bg-dark-green'>
        <h2 className='ml-3 pb-4 pt-10 text-center text-4xl text-white'>
          Descubre mi blog:
        </h2>
        <BlogCard />
      </div>
    </section>
  );
};
