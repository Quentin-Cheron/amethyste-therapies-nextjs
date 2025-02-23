import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as motion from 'motion/react-client'

const services = [
  {
    title: 'Coaching & Développement Personnel',
    description:
      'Accompagnement sur mesure pour atteindre vos objectifs personnels et professionnels.',
    icon: '🎯',
  },
  {
    title: 'Bien-être & Gestion du Stress',
    description:
      'Techniques et conseils pratiques pour améliorer votre équilibre émotionnel et mental.',
    icon: '🧘',
  },
  {
    title: 'Consulting & Stratégie',
    description: 'Solutions adaptées pour optimiser votre organisation et atteindre vos ambitions.',
    icon: '📈',
  },
  {
    title: 'Accompagnement Personnalisé',
    description: 'Un suivi dédié et adapté à vos besoins spécifiques dans un cadre bienveillant.',
    icon: '🤝',
  },
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Un Accompagnement Sur-Mesure Pour Votre Épanouissement
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Des services variés pour répondre à vos besoins personnels et professionnels
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex"
            >
              <Card className="p-6 shadow-md border border-gray-200 rounded-2xl flex flex-col h-full">
                <CardHeader className="flex flex-col items-center flex-grow px-0">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 text-center flex-grow">
                  {service.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
