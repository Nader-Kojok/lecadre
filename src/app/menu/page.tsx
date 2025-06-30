'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Types pour les plats
interface DishItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

// Plats principaux sénégalais
const mainDishes: DishItem[] = [
  {
    id: 1,
    name: 'Thieboudienne Rouge',
    description: 'Riz au poisson, légumes et sauce tomate traditionnelle',
    price: 3500,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 2,
    name: 'Thieboudienne Blanc',
    description: 'Riz au poisson blanc, légumes frais et épices douces',
    price: 3500,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Yassa Poulet',
    description: 'Poulet mariné aux oignons et citron, riz parfumé',
    price: 3000,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 4,
    name: 'Mafé Bœuf',
    description: 'Ragoût de bœuf à la pâte d\'arachide, légumes de saison',
    price: 3200,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    name: 'Poisson Braisé',
    description: 'Poisson grillé aux épices, attiéké et légumes croquants',
    price: 2800,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1559847844-d721426d6edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 6,
    name: 'Domoda',
    description: 'Ragoût traditionnel à la pâte d\'arachide et légumes',
    price: 2500,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

// Accompagnements
const sides: DishItem[] = [
  {
    id: 7,
    name: 'Attiéké',
    description: 'Semoule de manioc traditionnelle',
    price: 800,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 8,
    name: 'Riz Parfumé',
    description: 'Riz basmati aux épices douces',
    price: 600,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 9,
    name: 'Salade Africaine',
    description: 'Mélange de légumes frais et vinaigrette maison',
    price: 1000,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

const categories = [
  { 
    id: 'main',
    name: 'Plats Principaux',
    icon: '🍽️',
    items: mainDishes
  },
  { 
    id: 'side',
    name: 'Accompagnements',
    icon: '🥗',
    items: sides
  },
];

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(['main']);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Notre Menu
          </h1>
          <p className="text-xl text-amber-700 font-medium mb-2">
            Spécialités Sénégalaises Authentiques
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos plats traditionnels préparés avec des ingrédients frais et des recettes ancestrales.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Collapsible 
                open={openCategories.includes(category.id)}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-amber-50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {category.name}
                        </h2>
                        <p className="text-gray-600">
                          {category.items.length} spécialités délicieuses
                        </p>
                      </div>
                    </div>
                    {openCategories.includes(category.id) ? (
                      <ChevronUp className="h-6 w-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-amber-600" />
                    )}
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                            {item.popular && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                Populaire
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xl font-bold text-amber-600">{item.price.toLocaleString()} FCFA</span>
                              <Button
                                onClick={() => {
                                  const message = `Bonjour Le Cadre, je souhaite commander : ${item.name} (${item.price.toLocaleString()} FCFA)`;
                                  window.open(`https://wa.me/221771595352?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm"
                              >
                                <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                                Commander
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Envie de commander ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez-nous directement via WhatsApp pour passer votre commande ou demander un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://wa.me/221771595352?text=Bonjour%20Le%20Cadre%2C%20je%20souhaite%20passer%20une%20commande', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Commander sur WhatsApp
            </Button>
            <Button
              onClick={() => window.location.href = '/devis'}
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}