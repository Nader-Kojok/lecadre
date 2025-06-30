'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0 pt-16">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
            alt="Devis Personnalisé - Le Cadre"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-fredoka mb-4">
                Devis Personnalisé
              </h1>
              <h2 className="text-2xl md:text-3xl font-comfortaa mb-6 text-[#D2B48C]">
                Solutions Sur Mesure
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Que ce soit pour un mariage, un anniversaire, un événement d'entreprise ou toute autre occasion spéciale, 
                nous créons des expériences culinaires sur mesure qui marquent les esprits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsFormOpen(true)}
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 text-base w-full sm:w-[280px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold px-4"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                  Demander un devis gratuit
                </Button>
                
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/20 text-base w-full sm:w-[240px] h-[60px] border-2 border-white hover:border-white text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa px-4"
                  >
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Nous Contacter
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6 flex justify-center items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-[#D2B48C]" />
                  <span className="font-medium">+221 77 159 53 52</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
                  <span className="font-medium">WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                <span className="text-[#006464] font-bold">
                  POURQUOI CHOISIR LE CADRE ?
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#006464] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Notre expertise et notre passion nous permettent de créer des moments inoubliables 🍽️
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#006464]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={feature.icon} className="text-3xl text-[#006464]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#006464] mb-3 font-comfortaa">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5E6D3] to-[#D2B48C]/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                <span className="text-[#006464] font-bold">
                  COMMENT ÇA MARCHE ?
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#006464] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Un processus simple et transparent pour votre tranquillité d'esprit 🎯
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#D2B48C] transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#006464] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg font-fredoka">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#006464] mb-3 font-comfortaa">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006464] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-fredoka">
              Prêt à créer votre événement de rêve ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Remplissez notre formulaire détaillé et recevez un devis personnalisé sous 24 heures. 
              C'est gratuit et sans engagement !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="bg-white text-[#006464] hover:bg-gray-100 text-base w-full sm:w-[280px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold px-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                Commencer maintenant
              </Button>
              
              <div className="text-white/80 text-sm font-comfortaa">
                ✓ Devis gratuit • ✓ Réponse rapide • ✓ Sans engagement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Needs Form Modal */}
      {isMounted && (
        <ClientNeedsForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
};

export default DevisPage;