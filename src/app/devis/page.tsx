'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientNeedsForm from '@/components/order/ClientNeedsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faCalendarAlt,
  faUsers,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCheckCircle,
  faClock,
  faHeart,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const DevisPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: faUtensils,
      title: "Cuisine personnalisée",
      description: "Menus adaptés à vos goûts et restrictions alimentaires"
    },
    {
      icon: faUsers,
      title: "Service professionnel",
      description: "Équipe expérimentée pour tous types d'événements"
    },
    {
      icon: faMapMarkerAlt,
      title: "Service à domicile",
      description: "Nous nous déplaçons chez vous ou sur votre lieu d'événement"
    },
    {
      icon: faClock,
      title: "Ponctualité garantie",
      description: "Respect des horaires pour la réussite de votre événement"
    },
    {
      icon: faHeart,
      title: "Passion culinaire",
      description: "Chaque plat est préparé avec amour et expertise"
    },
    {
      icon: faAward,
      title: "Qualité premium",
      description: "Ingrédients frais et de qualité supérieure"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Remplissez le formulaire",
      description: "Décrivez-nous votre événement et vos besoins en détail"
    },
    {
      number: "02",
      title: "Recevez votre devis",
      description: "Nous vous contactons sous 24h avec une proposition personnalisée"
    },
    {
      number: "03",
      title: "Confirmez votre commande",
      description: "Validez les détails et laissez-nous nous occuper du reste"
    },
    {
      number: "04",
      title: "Profitez de votre événement",
      description: "Détendez-vous, nous gérons tout pour votre satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <FontAwesomeIcon 
              icon={faUtensils} 
              className="text-6xl text-amber-600 mb-6" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Demandez votre
            <span className="text-amber-600 block">devis personnalisé</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Que ce soit pour un mariage, un anniversaire, un événement d'entreprise ou toute autre occasion spéciale, 
            nous créons des expériences culinaires sur mesure qui marquent les esprits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
              Demander un devis gratuit
            </Button>
            
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-amber-600" />
                <span className="font-medium">+221 77 159 53 52</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-600" />
                <span className="font-medium">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Le Cadre ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre expertise et notre passion nous permettent de créer des moments inoubliables
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={feature.icon} className="text-2xl text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour votre tranquillité d'esprit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-amber-300 transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à créer votre événement de rêve ?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Remplissez notre formulaire détaillé et recevez un devis personnalisé sous 24 heures. 
            C'est gratuit et sans engagement !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
              Commencer maintenant
            </Button>
            
            <div className="text-amber-100 text-sm">
              ✓ Devis gratuit • ✓ Réponse rapide • ✓ Sans engagement
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-[#006464] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FontAwesomeIcon icon={faPhone} className="text-2xl text-amber-400 mb-3" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-300">+221 77 159 53 52</p>
            </div>
            
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-amber-400 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">contact@lecadre-restaurant.com</p>
            </div>
            
            <div>
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-amber-400 mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-300">Disponible 24h/7j</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Le Cadre Restaurant. Tous droits réservés.
            </p>
          </div>
        </div>
      </section>

      {/* Client Needs Form Modal */}
      <ClientNeedsForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
};

export default DevisPage;