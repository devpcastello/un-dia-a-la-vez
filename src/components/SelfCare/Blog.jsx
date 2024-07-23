import { useParams } from 'react-router-dom';
import { BlogCard } from '../Home/BlogCard';
import { blogData } from '../../data/selfCareBlog';
import { HeroSection } from './components/HeroSection';

export const Blog = () => {
  const { blog } = useParams();

  return (
    <>
      {blogData.map(
        ({
          id,
          heroBackground,
          heroTitle,
          heroMessage,
          heroImage,
          blogTitle,
          blogDescription,
          blogCards,
        }) => {
          if (blog !== !blog) {
            return (
              <main key={id}>
                <HeroSection
                  heroBackground={heroBackground}
                  heroTitle={heroTitle}
                  heroMessage={heroMessage}
                  heroImage={heroImage}
                />
                <section className='bg-dark-green px-5 py-20'>
                  <div className=' flex h-fit w-full flex-col gap-8 bg-dark-green'>
                    <h2 className='ml-3 pb-4 pt-10 text-center text-4xl text-white'>
                      Descubre mi blog:
                    </h2>
                    <BlogCard />
                  </div>
                </section>
              </main>
            );
          }
          return null;
        },
      )}
    </>
  );
};
