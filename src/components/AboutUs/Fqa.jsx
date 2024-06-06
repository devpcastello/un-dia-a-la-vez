export const Fqa = () => {
  return (
    <section className='m-8 py-10'>
      <div className='container mx-auto'>
        <h2 className='my-8 text-center text-4xl font-medium text-gray-10'>
          Preguntas frecuentes (FAQ)
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div className='mb-6'>
            <h3 className='mb-3 text-xl font-medium text-gray-8'>
              ¿Qué tipo de terapia ofrecen?
            </h3>
            <p className='text-gray-8'>
              Ofrecemos terapia cognitivo-conductual, terapia psicodinámica,
              terapia centrada en la persona y terapia de pareja.
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-3 text-xl font-semibold text-gray-8'>
              ¿Cómo puedo saber si la terapia es adecuada para mí?
            </h3>
            <p className='text-gray-8'>
              En nuestra primera sesión, evaluaremos tus necesidades y
              objetivos, y juntos determinaremos si la terapia es adecuada para
              ti. Si no es así, te recomendaremos otros recursos útiles.
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-3  text-xl font-semibold text-gray-8'>
              ¿Cuánto tiempo dura una sesión de terapia?
            </h3>
            <p className='text-gray-8'>
              Las sesiones de terapia individuales duran aproximadamente 50
              minutos, mientras que las sesiones de terapia de pareja duran
              60-90 minutos.
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-3  text-xl font-semibold text-gray-8'>
              ¿Cuánto tiempo dura el proceso de terapia?
            </h3>
            <p className='text-gray-8'>
              La duración del proceso de terapia varía según las necesidades y
              objetivos de cada persona. Algunos pacientes encuentran solución a
              sus problemas en unas pocas sesiones, mientras que otros pueden
              requerir un tratamiento a largo plazo.
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='mb-3 text-xl font-semibold text-gray-8'>
              ¿Cómo puedo hacer una cita?
            </h3>
            <p className='text-gray-8'>
              Puedes hacer una cita a través de nuestra página web o por
              teléfono. Si tienes alguna pregunta antes de hacer una cita, no
              dudes en contactarnos para obtener más información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
