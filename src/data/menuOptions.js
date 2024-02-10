export const menuOptions = [
  {
    name: "Terapia Online",
    link: "/",
    options: [],
  },
  {
    name: "Otros Servicios",
    link: "/therapy",
    options: [
      {
        subLinkName: "Terapia Presencial",
        subLink: "/therapy",
      },
      {
        subLinkName: "Costo Social",
        subLink: "/therapy/social",
      },
      {
        subLinkName: "Psicoterapia Familiar",
        subLink: "/therapy/familiar",
      },
      {
        subLinkName: "Charlas",
        subLink: "test",
      },
      {
        subLinkName: "Talleres",
        subLink: "test",
      },
    ],
  },
  {
    name: "Acerca de nosotros",
    link: "/about",
    options: [
      {
        subLinkName: "Equipo",
        subLink: "/about/staff",
      },
      {
        subLinkName: "Testimonios",
        subLink: "/about/testimonials",
      },
    ],
  },
  {
    name: "Auto cuidado",
    subLink: "/self-care",
    options: [
      {
        subLinkName: "Blog",
        subLink: "/self-care/blog",
      },
      {
        subLinkName: "Recursos",
        subLink: "/self-care/resources",
      },
    ],
  },
];
