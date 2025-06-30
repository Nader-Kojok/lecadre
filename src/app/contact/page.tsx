import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { ContactActions } from '@/components/contact/ContactActions';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';

export const metadata = {
  title: 'Contact - Le Cadre',
  description: 'Contactez Le Cadre, votre traiteur professionnel à Dakar. Devis personnalisés pour entreprises et événements.',
};

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0 pt-16">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
            alt="Contactez Le Cadre - Service Client Professionnel"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-fredoka mb-4">
                Contactez-Nous
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Besoin d&apos;un service traiteur professionnel ? Notre équipe est à votre disposition pour répondre à toutes vos demandes et établir un devis personnalisé ! 🍽️
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base w-full sm:w-[220px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold px-4">
                    Demander un Devis 📋
                  </Button>
                </Link>
                <div className="w-full sm:w-auto">
                   <WhatsAppButton className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/20 text-base w-full sm:w-[220px] h-[60px] border-2 border-white hover:border-white text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa px-4">
                     WhatsApp 💬
                   </WhatsAppButton>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <div className="inline-block relative">
               <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
                 <span className="text-[#006464] font-bold">
                   NOUS CONTACTER
                 </span>
               </h2>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#006464] rounded-full"></div>
             </div>
             <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
               Votre satisfaction est notre priorité. Contactez-nous pour tous vos besoins en restauration ! 📞
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-8">Nos Informations</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdLocationOn className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Adresse</h3>
                    <p className="text-gray-600">Livraison sur tout Dakar, Sénégal 🇸🇳</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Téléphone</h3>
                    <p className="text-gray-600">+221 77 159 53 52</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdEmail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Email</h3>
                    <p className="text-gray-600">contact@lecadre-traiteur.sn</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ContactActions />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-6">Horaires de Service</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900 font-comfortaa">Lundi - Vendredi</span>
                  <span className="text-primary font-medium font-comfortaa">08h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900 font-comfortaa">Samedi</span>
                  <span className="text-primary font-medium font-comfortaa">09h00 - 16h00</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary font-comfortaa">
                  📱 Devis personnalisés sur demande
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-6">Zones de Service</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Entreprises</p>
                  <p className="text-sm text-gray-600">Plateaux repas, Buffets</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Événements</p>
                  <p className="text-sm text-gray-600">Mariages, Séminaires</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Particuliers</p>
                  <p className="text-sm text-gray-600">Anniversaires, Réceptions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.7!2d-17.5!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzA2LjgiTiAxN8KwMzAnMDAuMCJX!5e0!3m2!1sfr!2sfr!4v1710347161811!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Maps - Zone de service Le Cadre"
              aria-label="Carte Google Maps montrant les zones de service de Le Cadre à Dakar"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}