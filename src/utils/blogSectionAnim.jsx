import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

export const blogSectionAnim = (element, startX, endX, startY, endY) => {
  console.log(element);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: element, // Selector del elemento que actúa como desencadenador
      start: 'top bottom', // Punto de inicio del desencadenador
      end: 'bottom center', // Punto de finalización del desencadenador
      toggleActions: 'play none none none', // Acciones de activación del desencadenador
      // Agrega la animación a ScrollTrigger
      animation: gsap.fromTo(
        element, // Selector del elemento
        { opacity: 0, y: startY, x: startX }, // Estado inicial (from)
        { opacity: 1, y: endY, x: endX, duration: 2, ease: 'power2.out' }, // Estado final (to)
      ),
    });
  }, []);
};
