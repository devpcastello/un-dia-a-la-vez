export const menuOptions = [
  {
    id: 'terapia-online',
    name: 'Terapia Online',
    link: '/therapy',
    options: [],
  },
  {
    id: 'other-services',
    name: 'Otros Servicios',
    link: '/therapy',
    options: [
      {
        id: 'terapia-pareja',
        subLinkName: 'Terapia de Pareja',
        subLink: '/therapy',
      },
      {
        id: 'terapia-presencial',
        subLinkName: 'Terapia Presencial',
        subLink: '/therapy',
      },
      {
        id: 'costo-social',
        subLinkName: 'Costo Social',
        subLink: '/therapy',
      },
      {
        id: 'terapia-familiar',
        subLinkName: 'Psicoterapia Familiar',
        subLink: '/therapy',
      },
      {
        id: 'charlas',
        subLinkName: 'Charlas',
        subLink: '/therapy',
      },
      {
        id: 'talleres',
        subLinkName: 'Talleres',
        subLink: '/therapy',
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
