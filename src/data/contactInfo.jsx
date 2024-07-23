import envelope from '../assets/contactInfo/envelope.svg';
import phone from '../assets/contactInfo/phone.svg';
import location from '../assets/contactInfo/location.svg';
import { MapPin, Phone, Mail } from 'lucide-react';

export const contactInfo = [
  {
    title: 'Ubicación',
    description: 'Calle Arrayanes',
    icon: <MapPin />,
    link: '#',
  },
  {
    title: 'Teléfono',
    description: '987654321',
    icon: <Phone />,
    link: '#',
  },
  {
    title: 'Email',
    description: 'contacto@undialavez.com',
    icon: <Mail />,
    link: '#',
  },
];
