export const menuOptions = [
  {
    id: 'terapia-online',
    name: 'Terapia Online',
    link: '/service',
    options: [],
  },
  {
    id: 'other-services',
    name: 'Otros Servicios',
    link: '/service',
    options: [
      {
        id: 'terapia-pareja',
        subLinkName: 'Terapia de Pareja',
        subLink: '/service',
      },
      {
        id: 'terapia-presencial',
        subLinkName: 'Terapia Presencial',
        subLink: '/service',
      },
      {
        id: 'costo-social',
        subLinkName: 'Costo Social',
        subLink: '/service',
      },
      {
        id: 'terapia-familiar',
        subLinkName: 'Psicoterapia Familiar',
        subLink: '/service',
      },
      {
        id: 'charlas',
        subLinkName: 'Charlas',
        subLink: '/service',
      },
      {
        id: 'talleres',
        subLinkName: 'Talleres',
        subLink: '/service',
      },
    ],
  },
  {
    id: 'about-us',
    name: 'Acerca de nosotros',
    link: '/about',
    options: [
      {
        subLinkName: 'Equipo',
        subLink: '/about/staff',
      },
      {
        subLinkName: 'Testimonios',
        subLink: '/about/testimonials',
      },
    ],
  },
  {
    id: 'self-care',
    name: 'Auto cuidado',
    subLink: '/self-care',
    options: [
      {
        subLinkName: 'Blog',
        subLink: '/self-care/blog',
      },
      {
        subLinkName: 'Recursos',
        subLink: '/self-care/resources',
      },
    ],
  },
];
