import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'
import * as motion from 'motion/react-client'

export default function Hero() {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat h-[90vh] flex items-center justify-center text-center px-6"
      style={{ backgroundImage: 'url(/uploads/global/banner.webp)' }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu du Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl text-white"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-title">
          Cabinet de Psychothérapie <br />
          <span className="text-primary">Approches Thérapeutiques Intégratives</span>
        </h1>
        <p className="text-lg md:text-xl mt-6 leading-relaxed">
          Une approche globale et personnalisée pour votre bien-être : <br />
          <span className="font-semibold">TCC</span>, <span className="font-semibold">EMDR</span>,{' '}
          <span className="font-semibold">PNL</span>,{' '}
          <span className="font-semibold">Hypnothérapie</span>,{' '}
          <span className="font-semibold">ICV</span> et plus encore.
        </p>

        {/* Bouton CTA animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-8"
        >
          <a
            href="https://www.resalib.fr/praticien/43834-stephanie-morier-praticien-emdr-salon-de-provence"
            target="_blank"
            aria-label="Prendre rendez-vous pour une consultation"
            className={cn(buttonVariants(), 'cursor-pointer')}
          >
            Prendre Rendez-vous
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
