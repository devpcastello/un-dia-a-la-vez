import { useState } from "react";
import "./index.css";
import logo from "./assets/logo.svg";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import { AppRouter } from "./router/AppRouter";

function LandingApp() {
  return (
    <>
      <AppRouter />
      {/* <FloatingWhatsApp
        phoneNumber="+51977133653"
        accountName="Un día a la vez"
        statusMessage="Estamos disponibles"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        avatar={logo}
        notificationSound
        notification
        allowClickAway
      /> */}
    </>
  );
}

export default LandingApp;
