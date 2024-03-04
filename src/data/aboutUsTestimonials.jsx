import bgStaff from '../assets/about/testimonials.jpg';
import heroImage from '../assets/about/testimonials-2.jpg';

import person1 from '../assets/adolescents/adolescente1.jpg';
import person2 from '../assets/adolescents/adolescente2.jpg';
import person3 from '../assets/adolescents/adolescente3.jpg';
import person4 from '../assets/adolescents/adolescente4.jpg';

export const testimonialsData = [
  {
    id: 'staff',
    heroBackground: bgStaff,
    heroTitle: 'Testimonios',
    heroMessage: 'Lorem',
    heroImage,
    testimonialsTitle: 'Los testimonios de nuestros clientes',
    testimonialsDescription:
      '¡Aquí te presentamos algunas opiniones de nuestros clientes satisfechos! Nos enorgullece saber que hemos cumplido con sus expectativas y hemos brindado soluciones efectivas a sus necesidades. Esperamos que sus testimonios te den la confianza que necesitas para elegir nuestro producto/servicio y unirte a nuestra comunidad de clientes satisfechos. ¡Gracias por confiar en nosotros!',
    testimonialsCards: [
      {
        name: 'Maritza Grados',
        image: `${person1}`,
        description: `
        Gracias a la terapia con [nombre del terapeuta], pude superar la ansiedad que me impedía disfrutar mi vida al máximo. Ahora siento más confianza en mí mismo y me enfrento a los desafíos con mayor tranquilidad. ¡La terapia cambió mi vida para siempre!
        `,
      },
      {
        name: 'Jennefer Urrutia',
        image: `${person2}`,
        description: `
    La terapia me ayudó a entender y manejar mejor mis emociones, lo que mejoró significativamente mi calidad de vida. Recomendaría la terapia a cualquiera que busque un cambio positivo en su vida
        `,
      },
      {
        name: 'Ernesto Valdemar',
        image: `${person3}`,
        description: `
    Estaba lidiando con una depresión profunda y me resultaba difícil encontrar esperanza en el futuro. La terapia me brindó las herramientas necesarias para salir adelante y construir una vida más satisfactoria para mí mismo. Estoy agradecido de haber tomado la decisión de buscar ayuda
        `,
      },
      {
        name: 'Diana Salgado',
        image: `${person4}`,
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        nesciunt ea similique molestias vel minima quibusdam, ab et unde porro
        ipsum labore, corrupti aspernatur velit, cumque voluptatem reiciendis.
        Dolore, obcaecati! m labore, corrupti aspernatur velit, cumque
        voluptatem reiciendis. Dolore, obcaecati!
        `,
      },
    ],
  },
];
