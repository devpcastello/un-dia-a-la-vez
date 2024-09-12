import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

export const BlogCard = () => {
  return (
    <div className='grid h-fit w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
      {posts.map(({ id, title, image, date, description }) => (
        <Link key={title} to={`/self-care/blog/${id}`}>
          <div className='bg-gray-2 mx-auto h-96 w-80 rounded-lg text-center md:w-[350px] xl:w-[330px]'>
            <div className='h-48 w-full '>
              <img
                className='card-image size-full rounded-t-lg'
                src={image}
                alt=''
              />
            </div>
            <div className='p-5'>
              <p className='text-gray-6 mb-3 font-light'>{date}</p>
              <h3 className='text-gray-10 mb-3 text-2xl font-medium'>
                {title}
              </h3>
              <div className=' h-12 w-full overflow-hidden text-clip'>
                <p className='text-gray-8 overflow-hidden text-clip font-normal'>
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
