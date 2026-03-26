import type { Metadata } from 'next'

import { Card } from './components/Card.jsx'
import { ListOfQuestions } from './components/ListOfQuestions.jsx'
import { LEVELS } from './constants.js'

export const metadata: Metadata = {
  title: 'Go Wiki - Preguntas típicas de entrevista con respuesta',
  description:
    'Aprende Go con preguntas de entrevista detalladas en español. Goroutines, channels, defer, mutex, interfaces y más conceptos fundamentales.',
  openGraph: {
    title: 'Go Wiki - Preguntas de entrevista',
    description:
      'Aprende Go con preguntas de entrevista detalladas en español.',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Wiki - Preguntas de entrevista',
    description:
      'Aprende Go con preguntas de entrevista detalladas en español.',
    images: ['/og-image.svg'],
  },
}

export default function Page() {
  return (
    <>
      <div className='mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800'>
        <p className='text-sm text-blue-800 dark:text-blue-200'>
          Este proyecto es un fork de{' '}
          <a
            className='underline font-bold'
            href='https://github.com/midudev/preguntas-entrevista-react'
            target='_blank'
            rel='noreferrer'
          >
            midudev/preguntas-entrevista-react
          </a>
          . Si te gusta, por favor déjale una ⭐ en el proyecto original.
        </p>
      </div>
      <h2 className='pb-4 text-2xl font-bold text-blue-900 dark:text-blue-200 animate-fade-in animate-duration-500'>
        Las preguntas más buscadas...
      </h2>
      <section className='grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <Card
          title='¿Qué es una goroutine?'
          excerpt='Una goroutine es una función que se ejecuta de manera concurrente. Es más ligera que un hilo del sistema y es gestionada por el runtime de Go.'
          slug='/que-es-una-goroutine/#content'
          level={LEVELS.EASY}
        />
        <Card
          title='¿Qué son los channels?'
          excerpt='Los channels son los conductos que permiten la comunicación entre goroutines. Se pueden usar para sincronizar y compartir datos entre ellas.'
          slug='/que-son-los-channels/#content'
          level={LEVELS.MEDIUM}
        />
      </section>
      <h2 className='pb-4 mt-16 text-2xl font-bold text-blue-900 dark:text-blue-100 animate-fade-in animate-duration-500'>
        Todas las preguntas sobre Go disponibles
      </h2>
      <ListOfQuestions />
    </>
  )
}
