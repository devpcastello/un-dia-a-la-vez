import { useParams } from 'react-router-dom';
import { posts } from '../../../data/posts';

export const BlogEntry = () => {
  const { index } = useParams();
  const post = posts.find((p) => p.id === parseInt(index));

  return (
    <div className='bg-dark-green pt-14'>
      {post ? (
        <>
          <div className='h-64 w-full overflow-hidden rounded-b-xl'>
            <img className='w-full' src={`${post.image}`} alt='' />
          </div>
          <div className='p-8'>
            <h2 className='text-3xl font-bold text-white'>{post.title}</h2>
            <p className='pt-4 text-gray-2'> {post.description} </p>
          </div>
        </>
      ) : null}
    </div>
  );
};
