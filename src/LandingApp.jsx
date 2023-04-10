import { useState } from "react";
import "../dist/main.css";

import {
  BenefitsComponent,
  BlogComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  SubscriptionComponent,
} from "./components/Home";

function LandingApp() {
  const [count, setCount] = useState(0);

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
}

export default LandingApp;
