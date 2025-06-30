import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faHeart, 
  faUsers,
  faAward,
  faHandshake,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'À Propos - Le Cadre',
  description: 'Découvrez l\'histoire de Le Cadre, votre traiteur professionnel à Dakar spécialisé dans les formules entreprises et événements.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0 pt-16">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
            alt="Le Cadre - Traiteur Professionnel"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-fredoka mb-4">
                À Propos
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Depuis nos débuts, nous créons des expériences culinaires qui réchauffent les cœurs. 
                Une passion pour l'excellence et le service, votre traiteur de confiance à Dakar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/formules" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base w-full sm:w-[220px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold px-4">
                    Nos Formules 🍽️
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/20 text-base w-full sm:w-[220px] h-[60px] border-2 border-white hover:border-white text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa px-4"
                  >
                     Nous Contacter
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                <span className="text-[#006464] font-bold">
                  NOTRE HISTOIRE
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#006464] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Une aventure culinaire née de la passion et du savoir-faire 🍽️
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-fredoka mb-4 text-[#006464]">
                L&apos;Art Culinaire d&apos;Excellence
              </h3>
              <p className="text-lg text-gray-600 font-comfortaa leading-relaxed">
                Le Cadre est né d&apos;une passion dévorante pour l&apos;art culinaire et la restauration d&apos;excellence. Notre aventure a commencé avec une simple conviction : chaque repas doit être un moment de pur bonheur, savoureux et mémorable.
              </p>
              <p className="text-lg text-gray-600 font-comfortaa leading-relaxed">
                Dans notre cuisine professionnelle, nous préparons chaque jour nos plats avec passion, sélectionnons les meilleurs ingrédients locaux et créons des menus sur mesure qui subliment vos événements. Chaque prestation raconte une histoire de saveurs authentiques !
              </p>
            </div>
            <div className="relative group overflow-hidden aspect-[4/3] rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
                alt="Cuisine professionnelle Le Cadre"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#006464] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                <span className="text-white font-bold">
                  NOS VALEURS PROFESSIONNELLES
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
            </div>
            <p className="text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
              Notre engagement envers l'excellence culinaire se reflète dans chaque prestation 🍴
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faLeaf} className="h-10 w-10 text-[#006464]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
                Fraîcheur
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Produits frais sélectionnés chaque jour, ingrédients de saison pour des plats qui révèlent toute leur saveur.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faAward} className="h-10 w-10 text-[#006464]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
                Excellence
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Chaque plat est une invitation au plaisir, préparé avec expertise pour sublimer vos événements.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faHandshake} className="h-10 w-10 text-[#006464]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
                Partage
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Un service personnalisé où chaque événement devient mémorable, parfait pour créer des moments d'exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 text-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                <span className="text-[#006464] font-bold">
                  NOTRE ÉQUIPE PROFESSIONNELLE
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006464] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Des experts culinaires qui mettent tout leur savoir-faire dans chaque prestation pour vous offrir des événements d'exception 👨‍🍳
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                  alt="Notre Chef Cuisinier"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Notre Chef Cuisinier</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Maître dans l&apos;art culinaire, créateur de saveurs authentiques et raffinées qui subliment chaque événement.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8"
                  alt="Notre Équipe Culinaire"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Notre Équipe Culinaire</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Des professionnels passionnés qui créent des menus sur mesure pour vos événements avec expertise et créativité.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#006464]/20">
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Notre Équipe Service"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-[#006464] group-hover:text-secondary transition-colors">Notre Équipe Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Toujours là pour vous accueillir avec le sourire et vous accompagner dans vos choix avec professionnalisme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}