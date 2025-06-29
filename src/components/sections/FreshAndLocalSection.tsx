import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faHandHoldingHeart,
  faCookie,
  faArrowRight,
  faSeedling,
  faAward,
  faHeart,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';

export const FreshAndLocalSection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Cuisine professionnelle"
          fill
          className="object-cover opacity-20"
        />
      </div>
      

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-8">
            <h2 className="text-4xl md:text-6xl font-fredoka leading-tight">
              <span className="text-secondary font-bold">
                FRAÎCHEUR &
              </span>
              <br/>
              <span className="text-white font-bold">
                QUALITÉ PREMIUM
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Des ingrédients sélectionnés avec passion, une cuisine authentique et un savoir-faire artisanal pour votre plaisir gustatif 🌿✨
          </p>
        </div>

        {/* Quality badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faSeedling} className="h-8 w-8 text-green-400" />
            </div>
            <div className="text-sm font-bold text-green-400">100% Frais</div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faAward} className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="text-sm font-bold text-yellow-400">Qualité Premium</div>
          </div>
          <div className="text-center">
            <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-red-400" />
            </div>
            <div className="text-sm font-bold text-red-400">Fait Maison</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faUtensils} className="h-8 w-8 text-blue-400" />
            </div>
            <div className="text-sm font-bold text-blue-400">Chef Expérimenté</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faLeaf} className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Ingrédients Sélectionnés
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Nous privilégions les produits frais, les légumes de saison et les viandes de première qualité. Chaque ingrédient est choisi pour sa fraîcheur et son goût authentique.
            </p>
            <div className="mt-4 text-sm text-secondary font-bold">
              ✓ Légumes de saison • ✓ Viandes premium • ✓ Épices fraîches
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faHeart} className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Recettes Authentiques
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Nos recettes traditionnelles sont préparées selon les méthodes ancestrales, avec des sauces maison et des techniques de cuisson qui préservent toutes les saveurs.
            </p>
            <div className="mt-4 text-sm text-secondary font-bold">
              ✓ Sauces maison • ✓ Recettes traditionnelles • ✓ Cuisson lente
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faAward} className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Excellence Culinaire
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Notre équipe de chefs expérimentés apporte un savoir-faire artisanal à chaque plat, garantissant une présentation soignée et un goût exceptionnel.
            </p>
            <div className="mt-4 text-sm text-secondary font-bold">
              ✓ Chefs expérimentés • ✓ Présentation soignée • ✓ Contrôle qualité
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 font-comfortaa">
            Notre Processus de Qualité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🛒</div>
              <h4 className="font-bold mb-2">Sélection</h4>
              <p className="text-sm text-gray-300">Choix rigoureux des fournisseurs et ingrédients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h4 className="font-bold mb-2">Préparation</h4>
              <p className="text-sm text-gray-300">Cuisine fraîche selon nos recettes maison</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold mb-2">Contrôle</h4>
              <p className="text-sm text-gray-300">Vérification qualité et présentation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h4 className="font-bold mb-2">Livraison</h4>
              <p className="text-sm text-gray-300">Transport dans les meilleures conditions</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-accent text-[#006464] text-lg px-8 py-4 font-comfortaa font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faUtensils} className="mr-2" />
              Découvrir Notre Menu Complet
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};