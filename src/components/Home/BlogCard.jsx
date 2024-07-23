import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

export const BlogCard = () => {
  return (
    <div className='grid h-fit w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
      {posts.map(({ id, title, image, date, description }) => (
        <Link key={title} to={`/self-care/blog/${id}`}>
          <div className='mx-auto h-96 w-80 rounded-lg bg-gray-2 text-center md:w-[350px] xl:w-[330px]'>
            <div className='h-48 w-full '>
              <img
                className='card-image size-full rounded-t-lg'
                src={image}
                alt=''
              />
            </div>
            <div className='p-5'>
              <p className='mb-3 font-light text-gray-6'>{date}</p>
              <h3 className='mb-3 text-2xl font-medium text-gray-10'>
                {title}
              </h3>
              <div className=' h-12 w-full overflow-hidden text-clip'>
                <p className='overflow-hidden text-clip font-normal text-gray-8'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
