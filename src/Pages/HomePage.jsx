import {
  BenefitsComponent,
  BlogComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  SubscriptionComponent,
} from "../components/Home";

export const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HomeComponent />
      <BenefitsComponent />
      <BlogComponent />
      <SubscriptionComponent />
      <FooterComponent />
    </>
  );
};
