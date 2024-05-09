import post1 from '../assets/selfCare/posts/post1.jpg';
import post2 from '../assets/selfCare/posts/post2.jpg';
import post3 from '../assets/selfCare/posts/post3.jpg';
import post4 from '../assets/selfCare/posts/post4.jpg';

import heroImage from '../assets/selfCare/selfCare.jpg';
import bgStaff from '../assets/selfCare/selfCareBg.jpg';

export const blogData = [
  {
    id: 'staff',
    heroBackground: bgStaff,
    heroTitle: 'Nuestro blog actualizado cada semana',
    heroMessage:
      'Nuestro equipo de Psicólogos matriculados con años de experiencia en el campo de la psicoterapia conductual están al servicio de nuestros pacientes cuando estos lo requieran',
    heroImage,
    blogTitle: 'Lista de entradas',
    blogDescription: 'lorem',
    blogCards: [
      {
        id: 1,
        date: '01/01/2023',
        image: `${post1}`,
        title: 'Primer post que se está publicando en el blog',
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quia ad tempora vitae. Saepe deserunt dolore iure fuga libero quod
        nostrum dignissimos illo voluptas pariatur, rem aliquid repudiandae
        inventore debitis.
        `,
      },
      {
        id: 2,
        date: '01/02/2023',
        image: `${post2}`,
        title: 'Segundo post que se está publicando en el blog',
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quia ad tempora vitae. Saepe deserunt dolore iure fuga libero quod
        nostrum dignissimos illo voluptas pariatur, rem aliquid repudiandae
        inventore debitis.
        `,
      },
      {
        id: 3,
        date: '01/03/2023',
        image: `${post3}`,
        title: 'Tercer post que se está publicando en el blog',
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quia ad tempora vitae. Saepe deserunt dolore iure fuga libero quod
        nostrum dignissimos illo voluptas pariatur, rem aliquid repudiandae
        inventore debitis.
        `,
      },
      {
        id: 4,
        date: '01/04/2023',
        image: `${post4}`,
        title: 'Cuarto post que se está publicando en el blog',
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quia ad tempora vitae. Saepe deserunt dolore iure fuga libero quod
        nostrum dignissimos illo voluptas pariatur, rem aliquid repudiandae
        inventore debitis.
        `,
      },
    ],
  },
];
