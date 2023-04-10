import { useState } from "react";
import "../dist/main.css";

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
