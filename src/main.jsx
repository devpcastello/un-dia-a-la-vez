import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { FloatingWhatsApp } from 'react-floating-whatsapp'


import LandingApp from "./LandingApp";

import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingApp FloatingWhatsApp={FloatingWhatsApp} />
    </BrowserRouter>
  </React.StrictMode>
);
