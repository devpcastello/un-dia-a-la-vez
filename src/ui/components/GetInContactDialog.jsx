import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

const getInContact = 'openGetInContact';

export const GetInContactDialog = ({ clickedAction, setClickedAction }) => {
  const [keyName, setKeyName] = useState('');
  const [name, setName] = useState('');

  const handleOpenWtpp = () => {
    window.open(
      `https://wa.me/+51923022460?text=${encodeURIComponent(`${wtppMessage}`)}`,
      '_blank',
    );
  };

  const wtppMessage = `Hola, soy ${name}. Estoy interesado en llevar sesiones de terapia online.`;

  return (
    <Dialog
      open={clickedAction === getInContact}
      onOpenChange={(open) => {
        if (!open) {
          setClickedAction(null);
        }
      }}
    >
      <DialogTrigger className='hidden' />
      <DialogContent className='border-none bg-secondary'>
        <DialogHeader>
          <DialogTitle>Estamos aquí para ayudarte</DialogTitle>
          <DialogDescription>
            <div className='flex flex-col gap-5 p-6'>
              <input
                type='text'
                placeholder='Nombre'
                className='rounded-full border-none px-4 py-2 focus:border-none'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type='text'
                placeholder='Whatsapp'
                className='rounded-full border-none px-4 py-2 placeholder:text-white'
                onChange={(e) => {
                  setKeyName(e.target.value);
                }}
              />
              <Button
                className='rounded-full bg-accent px-4 py-2 text-white hover:font-bold'
                onClick={handleOpenWtpp}
              >
                Solicitar ayuda
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
