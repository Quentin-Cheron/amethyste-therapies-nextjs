'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as motion from 'motion/react-client'

export default function Accompagnement() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Titre principal avec animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-2xl font-bold text-gray-900 text-center sm:text-4xl"
      >
        Pourquoi consulter notre cabinet ?
      </motion.h2>

      {/* Texte d'introduction avec animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
      >
        Prenez un moment pour vous. Nos thérapies vous aident à gérer le stress, améliorer votre
        sommeil, stabiliser votre humeur et surmonter les épreuves de la vie, en retrouvant
        équilibre et sérénité.
      </motion.p>

      {/* Cartes d'informations avec animation et hauteur égale */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Carte 1 - Pour Qui */}
        <motion.div
          transition={{ type: 'spring', stiffness: 200 }}
          className="h-full"
          whileHover={{ scale: 1.05 }}
        >
          <Card className="shadow-md border border-gray-200 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Pour qui ?</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-gray-700 leading-relaxed">
                Nos méthodes s’adressent à tous, dès 3 ans. Grâce à des techniques validées
                scientifiquement, nous vous accompagnons efficacement dans la gestion des émotions
                et du bien-être mental, sans effets secondaires ni risque de rechute.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Carte 2 - Notre Mission */}
        <motion.div
          transition={{ type: 'spring', stiffness: 200 }}
          className="h-full"
          whileHover={{ scale: 1.05 }}
        >
          <Card className="shadow-md border border-gray-200 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Notre mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-gray-700 leading-relaxed">
                Nous vous offrons un accompagnement bienveillant, sans jugement, adapté à votre
                rythme. Grâce à nos approches humanistes et cognitives, nous traitons anxiété,
                troubles de l’humeur et psycho-traumatismes, en cabinet, à domicile ou en ligne.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
