import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faUtensils, 
  faLeaf, 
  faClock,
  faHeart,
  faFire,
  faSeedling,
  faAward
} from '@fortawesome/free-solid-svg-icons';

export const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
              <span className="text-white font-bold">
                NOS SPÉCIALITÉS CULINAIRES
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
            Nous sommes au service de votre bien-être et de votre santé 👨‍🍳
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faSeedling} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Cuisine Bio & Locale
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Ingrédients biologiques et produits locaux pour des repas sains et respectueux de l'environnement.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faFire} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Cuisine Traditionnelle
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Plats africains et du monde, préparés selon les recettes traditionnelles avec une touche moderne.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Cuisine Santé
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Menus équilibrés, faibles en matières grasses, riches en nutriments pour votre bien-être quotidien.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faAward} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Cuisine Gourmet
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Plats raffinés et créatifs pour les occasions spéciales et les palais les plus exigeants.
            </p>
          </div>
        </div>
        
        {/* Section des plats populaires */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Nos Plats les Plus Appréciés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Riz au Gras Premium - Le Cadre"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-2">
                  Riz au Gras Premium
                </h4>
                <p className="text-gray-300 text-sm">
                  Notre version revisitée du classique ivoirien avec des légumes frais et des épices authentiques.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&crop=center"
                  alt="Poisson Braisé Délice - Le Cadre"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-2">
                  Poisson Braisé Délice
                </h4>
                <p className="text-gray-300 text-sm">
                  Poisson frais grillé aux épices locales, accompagné d'attiéké et de légumes croquants.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sauce Arachide Royale - Le Cadre"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-2">
                  Sauce Arachide Royale
                </h4>
                <p className="text-gray-300 text-sm">
                  Sauce onctueuse aux arachides avec viande tendre, servie avec du riz parfumé.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-accent text-[#006464] text-lg px-8 py-4 font-comfortaa font-bold transition-all duration-300 shadow-lg hover:shadow-xl mr-4"
            >
              Découvrir Notre Menu
              <FontAwesomeIcon icon={faUtensils} className="ml-2" />
            </Button>
          </Link>
          <Link href="/formules">
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4 font-comfortaa font-bold transition-all duration-300"
            >
              Voir les Formules
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};