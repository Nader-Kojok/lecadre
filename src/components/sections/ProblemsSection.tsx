import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle,
  faBalanceScale,
  faClock,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export const ProblemsSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
              <span className="text-[#006464] font-bold">
                VOS DÉFIS QUOTIDIENS
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006464] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Nous comprenons les difficultés que vous rencontrez au quotidien 🤝
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Manque de Variété</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les options disponibles autour des bureaux sont souvent limitées, répétitives ou peu appétissantes. Résultat : les repas deviennent une corvée au lieu d'un moment de pause et de plaisir.
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Repas Mal Adaptés</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Beaucoup de plats disponibles sont riches, déséquilibrés ou mal préparés, ce qui entraîne une baisse d'énergie et de concentration l'après-midi.
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Perte de Temps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aller chercher à manger prend du temps. Entre les bouchons, la chaleur et les files d'attente, la pause déjeuner devient stressante et mal optimisée.
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Budget Imprévisible</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les coûts des repas peuvent rapidement s'accumuler et devenir difficiles à prévoir, surtout quand on mange à l'extérieur tous les jours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};