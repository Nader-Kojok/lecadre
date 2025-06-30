import {
  ServiceType,
  EventType,
  CuisinePreference,
  DietaryRestriction,
  Service,
  TeamSize,
  Frequency,
  BudgetRange,
  ClientNeeds
} from '../types/ClientNeedsTypes';

// Types de services avec descriptions et icônes
export const SERVICE_TYPES: ServiceType[] = [
  { 
    id: 'entreprise', 
    name: 'Formule Entreprise', 
    description: 'Solutions de restauration pour équipes (1-10, 11-25, 26+ personnes)',
    icon: '🏢',
    color: 'from-blue-400 to-indigo-400'
  },
  { 
    id: 'particulier', 
    name: 'Formule Particulier', 
    description: 'Abonnements individuels flexibles (Solo Flex, Midi, Max)',
    icon: '👤',
    color: 'from-green-400 to-emerald-400'
  },
  { 
    id: 'evenement', 
    name: 'Événement Spécial', 
    description: 'Mariages, anniversaires, baptêmes et célébrations',
    icon: '🎉',
    color: 'from-pink-400 to-red-400'
  }
];

export const EVENT_TYPES: EventType[] = [
  { id: 'birthday', name: 'Anniversaire', icon: '🎂', description: 'Célébrez en grand !', color: 'from-pink-400 to-red-400' },
  { id: 'wedding', name: 'Mariage', icon: '💒', description: 'Votre jour parfait', color: 'from-rose-400 to-pink-400' },
  { id: 'corporate', name: 'Événement d\'entreprise', icon: '🏢', description: 'Professionnalisme garanti', color: 'from-blue-400 to-indigo-400' },
  { id: 'family', name: 'Réunion familiale', icon: '👨‍👩‍👧‍👦', description: 'Moments précieux', color: 'from-green-400 to-emerald-400' },
  { id: 'graduation', name: 'Remise de diplôme', icon: '🎓', description: 'Succès mérité', color: 'from-yellow-400 to-orange-400' },
  { id: 'other', name: 'Autre', icon: '🎉', description: 'Toute occasion spéciale', color: 'from-purple-400 to-violet-400' }
];

export const CUISINE_PREFERENCES: CuisinePreference[] = [
  { id: 'traditional', name: 'Cuisine traditionnelle sénégalaise', icon: '🍲', description: 'Thieboudienne, Yassa, Mafé...' },
  { id: 'international', name: 'Cuisine internationale', icon: '🌍', description: 'Saveurs du monde entier' },
  { id: 'fusion', name: 'Cuisine fusion', icon: '✨', description: 'Créativité et innovation' },
  { id: 'vegetarian', name: 'Options végétariennes', icon: '🥗', description: 'Fraîcheur et santé' },
  { id: 'seafood', name: 'Fruits de mer', icon: '🦐', description: 'Poissons et crustacés frais' },
  { id: 'grilled', name: 'Grillades', icon: '🔥', description: 'Viandes et légumes grillés' }
];

export const DIETARY_RESTRICTIONS: DietaryRestriction[] = [
  { id: 'vegetarian', name: 'Végétarien' },
  { id: 'vegan', name: 'Végétalien' },
  { id: 'halal', name: 'Halal' },
  { id: 'gluten-free', name: 'Sans gluten' },
  { id: 'dairy-free', name: 'Sans lactose' },
  { id: 'nut-free', name: 'Sans noix' }
];

export const SERVICES: Service[] = [
  { id: 'catering', name: 'Service traiteur', description: 'Livraison de plats préparés', icon: '🚚', popular: true },
  { id: 'chef', name: 'Chef à domicile', description: 'Chef qui cuisine chez vous', icon: '👨‍🍳', premium: true },
  { id: 'waitstaff', name: 'Personnel de service', description: 'Serveurs pour votre événement', icon: '🤵', popular: true },
  { id: 'decoration', name: 'Décoration de table', description: 'Mise en place et décoration', icon: '🌸', premium: true },
  { id: 'equipment', name: 'Location d\'équipement', description: 'Tables, chaises, vaisselle', icon: '🪑', popular: false }
];

// Tailles d'équipe pour entreprises
export const TEAM_SIZES: TeamSize[] = [
  { id: 'small', name: '1-10 personnes', value: '1-10', price: '2 500 FCFA/repas' },
  { id: 'medium', name: '11-25 personnes', value: '11-25', price: '2 300 FCFA/repas' },
  { id: 'large', name: '26+ personnes', value: '26+', price: 'Sur devis' }
];

// Fréquences pour entreprises
export const ENTERPRISE_FREQUENCIES: Frequency[] = [
  { id: 'daily', name: 'Quotidien', value: 'quotidien', description: 'Du lundi au vendredi' },
  { id: 'weekly', name: 'Hebdomadaire', value: 'hebdomadaire', description: '2-3 fois par semaine' },
  { id: 'monthly', name: 'Mensuel', value: 'mensuel', description: 'Événements ponctuels' }
];

// Fréquences pour particuliers
export const INDIVIDUAL_FREQUENCIES: Frequency[] = [
  { id: 'flex', name: 'Solo Flex', value: 'flex', description: '3 repas/semaine - 27 000 FCFA/mois' },
  { id: 'midi', name: 'Solo Midi', value: 'midi', description: '5 repas/semaine - 45 000 FCFA/mois' },
  { id: 'max', name: 'Solo Max', value: 'max', description: '7 repas/semaine - 57 000 FCFA/mois' }
];

// Toutes les fréquences combinées
export const ALL_FREQUENCIES: Frequency[] = [...ENTERPRISE_FREQUENCIES, ...INDIVIDUAL_FREQUENCIES];

export const BUDGET_RANGES: BudgetRange[] = [
  { id: 'budget1', name: 'Moins de 50 000 FCFA' },
  { id: 'budget2', name: '50 000 - 100 000 FCFA' },
  { id: 'budget3', name: '100 000 - 200 000 FCFA' },
  { id: 'budget4', name: '200 000 - 500 000 FCFA' },
  { id: 'budget5', name: 'Plus de 500 000 FCFA' }
];

export const defaultClientNeeds: ClientNeeds = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  teamSize: '',
  frequency: '',
  eventType: '',
  eventDate: '',
  eventTime: '',
  guestCount: 0,
  location: '',
  cuisinePreferences: [],
  dietaryRestrictions: [],
  allergies: '',
  services: [],
  budget: '',
  specialRequests: '',
  previousExperience: false,
  referralSource: ''
};