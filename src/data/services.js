import bgOnline from '../assets/bgSections/bgTherapyOnline-2-min.jpg';
import onlineDescriptionImage from '../assets/therapyOnline-descriptionImage.svg';
import onlineTroubleCardImage1 from '../assets/therapies/undraw_spread_love_re_v3cl.svg';
import onlineTroubleCardImage2 from '../assets/therapies/undraw_right_direction_tge8.svg';
import onlineBenefitsCardImage1 from '../assets/therapies/undraw_heartbroken_cble.svg';
import onlineBenefitsCardImage2 from '../assets/therapies/undraw_feeling_blue_-4-b7q.svg';

export const therapies = [
  {
    id: 'terapia-online',
    heroBackground: bgOnline,
    heroTitle: 'Terapia online',
    heroSubtitle:
      'La confianza y la comunicación se construyen un día a la vez',

    heroMessage:
      '¡Esas conductas que dañan tu relación de pareja se pueden cambiar en un proceso guiado por un terapeuta!',
    heroButton: 'Solicitar terapia de pareja',
    descriptionTitle: '¡Quiero comenzar terapia ahora mismo!',
    description: `
    Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
    `,
    descriptionImage: onlineDescriptionImage,
    troublesTitle:
      'Los problemas a solucionar en terapia de pareja más comunes son:',
    troublesCards: [
      {
        title: 'Problemas de comunicación',
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
        image: onlineTroubleCardImage1,
      },
      {
        title: 'Problemas de comunicación',
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
        image: onlineTroubleCardImage1,
      },
      {
        title: 'Problemas de comunicación',
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
        image: onlineTroubleCardImage2,
      },
    ],
    benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
    benefitsCards: [
      {
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
        image: onlineBenefitsCardImage1,
      },
      {
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
        image: onlineBenefitsCardImage2,
      },
    ],
    buttonTherapy: '¡Quiero comenzar terapia ahora!',
  },
  // {
  //   id: 'terapia-pareja',
  //   heroBackground: './',
  //   heroTitle: 'Terapia de pareja',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
  // {
  //   id: 'terapia-familiar',
  //   heroBackground: './',
  //   heroTitle: 'Terapia en familia',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
  // {
  //   id: 'terapia-presencial',
  //   heroBackground: './',
  //   heroTitle: 'Terapia presencial',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
  // {
  //   id: 'talleres',
  //   heroBackground: './',
  //   heroTitle: 'Talleres',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
  // {
  //   id: 'charlas',
  //   heroBackground: './',
  //   heroTitle: 'Charlas',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
  // {
  //   id: 'costo-social',
  //   heroBackground: './',
  //   heroTitle: 'Costo Social',
  //   heroSubtitle:
  //     'La confianza y la comunicación se construyen un día a la vez',
  //   heroButton: 'Solicitar terapia de pareja',
  //   descriptionTitle: '¡Quiero comenzar terapia de pareja!',
  //   description: `
  //   Este tratamiento se centra en asistir a parejas que experimentan conflictos o atraviesan una crisis, brindándoles herramientas para aprovechar sus diferencias y restablecer una convivencia plena y feliz.
  //   `,
  //   troublesTitle: 'Los problemas más importantes a tratar...',
  //   troublesCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  //   benefitsTitle: 'Descubre los beneficios de llevar terapia de pareja',
  //   benefitsCards: [
  //     {
  //       title: 'Problemas de comunicación',
  //       description:
  //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ",
  //       image: './',
  //     },
  //   ],
  // },
];
