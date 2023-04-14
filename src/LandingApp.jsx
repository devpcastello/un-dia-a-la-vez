import { useState } from "react";
import "../docs/assets/index-748f39ad.css";

// import { HomePage } from "./Pages/HomePage";
import { AppRouter } from "./router/AppRouter";

function LandingApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default LandingApp;
