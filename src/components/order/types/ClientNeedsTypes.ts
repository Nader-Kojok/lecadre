export interface ClientNeedsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ClientNeeds {
  // Informations personnelles
  name: string;
  email: string;
  phone: string;
  
  // Type de service
  serviceType: string;
  
  // Détails entreprise
  teamSize: string;
  frequency: string;
  
  // Détails de l'événement
  eventType: string;
  eventDate: string;
  eventTime: string;
  guestCount: number;
  location: string;
  
  // Préférences culinaires
  cuisinePreferences: string[];
  dietaryRestrictions: string[];
  allergies: string;
  
  // Services souhaités
  services: string[];
  budget: string;
  
  // Informations supplémentaires
  specialRequests: string;
  previousExperience: boolean;
  referralSource: string;
}

export interface Step {
  id: string;
  title: string;
  subtitle?: string;
  icon: any;
  emoji?: string;
}

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface EventType {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface CuisinePreference {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface DietaryRestriction {
  id: string;
  name: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  popular?: boolean;
  premium?: boolean;
}

export interface TeamSize {
  id: string;
  name: string;
  value: string;
  price: string;
}

export interface Frequency {
  id: string;
  name: string;
  value: string;
  description: string;
}

export interface BudgetRange {
  id: string;
  name: string;
}