import { useState } from "react";

import {
  BenefitsComponent,
  BlogComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  SubscriptionComponent,
} from "./components/Home";

function App() {
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

export default App;
