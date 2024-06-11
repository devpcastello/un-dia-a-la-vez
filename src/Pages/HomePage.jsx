import {
  Benefits,
  BlogSection,
  Hero,
  // Subscription,
  WtppButton,
} from '../components/Home';
import { Services } from '../components/Home/Services';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <BlogSection />
      <Services />
      {/* <Subscription /> */}
      <WtppButton />
    </>
  );
};
