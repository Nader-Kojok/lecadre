import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    company: "TechCorp Solutions",
    role: "Directrice RH",
    content: "Le Cadre a transformé nos pauses déjeuner ! L'équipe est toujours ravie de la qualité des repas et du service impeccable. Un vrai plus pour notre entreprise.",
    rating: 5
  },
  {
    id: 2,
    name: "Pierre Martin",
    company: "Innovate & Co",
    role: "CEO",
    content: "Service exceptionnel et cuisine raffinée. Nos clients sont toujours impressionnés lors de nos déjeuners d'affaires. Je recommande vivement !",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    company: "Creative Agency",
    role: "Responsable Événementiel",
    content: "Pour nos événements d'entreprise, Le Cadre est notre partenaire de confiance. Professionnalisme et saveurs au rendez-vous à chaque fois.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
      <div className="absolute -top-4 left-8">
        <div className="bg-[#006464] w-8 h-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faQuoteLeft} className="h-4 w-4 text-white" />
        </div>
      </div>
      
      <div className="mb-6 pt-4">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FontAwesomeIcon 
              key={i} 
              icon={faStar} 
              className="h-5 w-5 text-secondary mr-1" 
            />
          ))}
        </div>
        <p className="text-gray-700 text-lg leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[#006464] to-secondary rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
            <p className="text-[#006464] font-medium">{testimonial.role}</p>
            <p className="text-gray-600 text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#006464] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#006464] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-8">
            <h2 className="text-4xl md:text-6xl font-fredoka leading-tight">
              <span className="text-[#006464] font-bold">
                ILS NOUS FONT
              </span>
              <br/>
              <span className="text-secondary font-bold">
                CONFIANCE
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec Le Cadre. 
            Leur satisfaction est notre plus belle récompense !
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#006464] mb-2">150+</div>
            <div className="text-gray-600 font-medium">Entreprises partenaires</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
            <div className="text-gray-600 font-medium">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#006464] mb-2">5000+</div>
            <div className="text-gray-600 font-medium">Repas servis</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Note moyenne</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#006464] mb-4 font-comfortaa">
              Rejoignez nos clients satisfaits !
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez pourquoi tant d'entreprises nous font confiance pour leurs repas d'affaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#006464] hover:bg-[#004d4d] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Demander un devis
              </button>
              <button className="border-2 border-[#006464] text-[#006464] hover:bg-[#006464] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Voir nos formules
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};