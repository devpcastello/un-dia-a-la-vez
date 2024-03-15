import bgStaff from '../assets/about/staff.jpg';
import heroImage from '../assets/about/staff-2.jpg';
import person1 from '../assets/people/person1.jpg';
import person3 from '../assets/people/person3.jpg';
import ana from '../assets/staff/ana.png';
import almendra from '../assets/staff/almendra.png';
import eduardo from '../assets/staff/eduardo.png';
import jeyck from '../assets/staff/jeyck.png';

export const members = [
  {
    id: 'staff',
    heroBackground: bgStaff,
    heroTitle: 'El equipo de Un Día a la Vez',
    heroMessage:
      'Nuestro equipo de Psicólogos matriculados con años de experiencia en el campo de la psicoterapia conductual están al servicio de nuestros pacientes cuando estos lo requieran',
    heroImage,
    psychologistTitle: 'Nuestro staff de psicólogos',
    psychologistDescription: 'lorem',
    psychologistCards: [
      {
        id: 1,
        name: 'Almendra Vizcarra',
        image: `${almendra}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.`,
        fullDescription: `
        ¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.

        Como terapeuta, estoy capacitado para trabajar con una variedad de problemas de salud mental, emocionales y de comportamiento, incluyendo ansiedad, depresión, trastornos de la alimentación, problemas de relación y mucho más. Utilizo una variedad de técnicas de terapia basadas en evidencia, incluyendo la terapia cognitivo-conductual, la terapia interpersonal y la terapia de aceptación y compromiso. \n
        `,
      },
      {
        id: 2,
        name: 'Ana Lucía',
        image: `${ana}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.`,
        fullDescription: `
        ¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.

        Como terapeuta, estoy capacitado para trabajar con una variedad de problemas de salud mental, emocionales y de comportamiento, incluyendo ansiedad, depresión, trastornos de la alimentación, problemas de relación y mucho más. Utilizo una variedad de técnicas de terapia basadas en evidencia, incluyendo la terapia cognitivo-conductual, la terapia interpersonal y la terapia de aceptación y compromiso.
        `,
      },
      {
        id: 3,
        name: 'Eduardo Pérez',
        image: `${eduardo}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.`,
        fullDescription: `
        ¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y satisfactoria, a través de un enfoque personalizado y centrado en el cliente.

        Como terapeuta, estoy capacitado para trabajar con una variedad de problemas de salud mental, emocionales y de comportamiento, incluyendo ansiedad, depresión, trastornos de la alimentación, problemas de relación y mucho más. Utilizo una variedad de técnicas de terapia basadas en evidencia, incluyendo la terapia cognitivo-conductual, la terapia interpersonal y la terapia de aceptación y compromiso.
        `,
      },
    ],
    enterpriseTitle: 'Quienes están detrás de la empresa',
    enterpriseDescription: 'lorem',
    enterpriseCards: [
      {
        id: 1,
        name: 'Erick Alpaca',
        image: `${person1}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. `,
        link: '#',
      },
      {
        id: 2,
        name: 'Jeyck',
        image: `${jeyck}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y .`,
        link: '#',
      },
      {
        id: 3,
        name: 'Memo',
        image: `${person3}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y .`,
        link: '#',
      },
      {
        id: 4,
        name: 'Jennie',
        image: `${person3}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y .`,
        link: '#',
      },
      {
        id: 5,
        name: 'Enrique Palomino',
        image: `${person3}`,
        shortDescription: `¡Hola! Mi nombre es [Nombre del terapeuta] y soy un terapeuta profesional con [X años/meses] de experiencia en la práctica clínica. Estoy dedicado a ayudar a mis clientes a alcanzar una vida plena y .`,
        link: '#',
      },
    ],
  },
];
