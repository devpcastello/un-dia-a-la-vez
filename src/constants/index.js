export const menuOptions = [
  {
    id: 'fast-assistance',
    name: 'Solicitar Sesión',
    link: '#',
    options: [],
    action: 'openGetInContact',
  },

  {
    id: 'other-services',
    name: 'Otros Servicios',
    link: '/service',
    options: [
      {
        id: 'terapia-online',
        subLinkName: 'Terapia Online',
        subLink: '/service',
      },
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
        id: 'terapia-familiar',
        subLinkName: 'Terapia Familiar',
        subLink: '/service',
      },
      {
        id: 'costo-social',
        subLinkName: 'Costo Social',
        subLink: '/service',
      },
      {
        id: 'charlas-talleres',
        subLinkName: 'Charlas y talleres',
        subLink: '/service',
      },
    ],
  },
  {
    id: 'about-us',
    name: 'Acerca de nosotros',
    link: '/about',
    options: [
      // {
      //   id: 'testimonials',
      //   subLinkName: 'Testimonios',
      //   subLink: '/about/testimonials',
      // },
      // {
      //   id: 'vision',
      //   subLinkName: 'Vision',
      //   subLink: '/about/vision',
      // },
      // {
      //   id: 'mission',
      //   subLinkName: 'Misión',
      //   subLink: '/about/mission',
      // },
      {
        id: 'staff',
        subLinkName: 'Equipo',
        subLink: '/about/staff',
      },
    ],
  },
  // {
  //   id: 'self-care',
  //   name: 'Auto cuidado',
  //   link: '/self-care',
  //   options: [
  //     {
  //       id: 'blog',
  //       subLinkName: 'Blog',
  //       subLink: '/self-care/blog',
  //     },
  //     {
  //       id: 'recursos',
  //       subLinkName: 'Recursos',
  //       subLink: '/self-care/resources',
  //     },
  //   ],
  // },
];
