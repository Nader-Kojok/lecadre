import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faCheck,
  faUtensils,
  faStar,
  faCrown,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const FormulasSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
              <span className="text-[#006464] font-bold">
                FORMULES ENTREPRISES
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006464] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Des solutions adaptées à la taille de votre équipe avec des tarifs dégressifs et flexibles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Pack Starter */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl">
              <span className="text-sm font-bold">STARTER</span>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#006464] group-hover:text-secondary transition-colors">
                PACK ÉQUIPE 1-10
              </h3>
              <p className="text-gray-500 font-medium">Idéal pour les petites équipes</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
                <span className="text-sm">5-10 repas par jour</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
                <span className="text-sm">Livraison quotidienne</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
                <span className="text-sm">Menus variés & équilibrés</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
                <span className="text-sm">Support client standard</span>
              </div>
            </div>
            
            <div className="text-center border-t pt-6">
              <div className="text-3xl font-bold text-[#006464] mb-2">2 500 FCFA</div>
              <div className="text-gray-500 text-sm">par repas</div>
            </div>
          </div>
          
          {/* Pack Business */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#006464] relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-[#006464] text-white px-4 py-2 rounded-bl-2xl">
              <span className="text-sm font-bold">POPULAIRE</span>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006464] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faStar} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#006464] group-hover:text-secondary transition-colors">
                PACK ÉQUIPE 11-25
              </h3>
              <p className="text-gray-500 font-medium">Parfait pour les équipes moyennes</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#006464] mr-3" />
                <span className="text-sm">11-25 repas par jour</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#006464] mr-3" />
                <span className="text-sm">Livraison + suivi dédié</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#006464] mr-3" />
                <span className="text-sm">Menus adaptés aux préférences</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#006464] mr-3" />
                <span className="text-sm">Support client prioritaire</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#006464] mr-3" />
                <span className="text-sm">Facturation mensuelle</span>
              </div>
            </div>
            
            <div className="text-center border-t pt-6">
              <div className="text-3xl font-bold text-[#006464] mb-2">2 300 FCFA</div>
              <div className="text-gray-500 text-sm">par repas</div>
              <div className="text-xs text-green-600 font-semibold mt-1">Économie de 200 FCFA/repas</div>
            </div>
          </div>
          
          {/* Pack Enterprise */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-bl-2xl">
              <span className="text-sm font-bold">ENTERPRISE</span>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCrown} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#006464] group-hover:text-secondary transition-colors">
                PACK ÉQUIPE 26+
              </h3>
              <p className="text-gray-500 font-medium">Solution sur mesure</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-3" />
                <span className="text-sm">26+ repas/jour ou multi-sites</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-3" />
                <span className="text-sm">Gestion centralisée</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-3" />
                <span className="text-sm">Menus personnalisés</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-3" />
                <span className="text-sm">Account manager dédié</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-3" />
                <span className="text-sm">Régimes spécifiques</span>
              </div>
            </div>
            
            <div className="text-center border-t pt-6">
              <div className="text-3xl font-bold text-[#006464] mb-2">Sur Devis</div>
              <div className="text-gray-500 text-sm">tarifs préférentiels</div>
              <div className="text-xs text-green-600 font-semibold mt-1">Jusqu'à -20% de réduction</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-[#006464] hover:bg-secondary text-white text-lg px-8 py-4 font-comfortaa font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
              Demander un Devis Personnalisé 📞
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};