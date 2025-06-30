import { ClientNeeds } from '../types/ClientNeedsTypes';
import {
  SERVICE_TYPES,
  EVENT_TYPES,
  CUISINE_PREFERENCES,
  DIETARY_RESTRICTIONS,
  SERVICES,
  TEAM_SIZES,
  ENTERPRISE_FREQUENCIES,
  INDIVIDUAL_FREQUENCIES,
  BUDGET_RANGES
} from '../constants/ClientNeedsConstants';

export const validateStep = (step: number, clientNeeds: ClientNeeds): Record<string, string> => {
  const newErrors: Record<string, string> = {};

  switch (step) {
    case 0: // Informations personnelles
      if (!clientNeeds.name.trim()) newErrors.name = 'Le nom est requis';
      if (!clientNeeds.email.trim()) newErrors.email = 'L\'email est requis';
      else if (!/\S+@\S+\.\S+/.test(clientNeeds.email)) newErrors.email = 'Email invalide';
      if (!clientNeeds.phone.trim()) newErrors.phone = 'Le téléphone est requis';
      break;
    
    case 1: // Type de service
      if (!clientNeeds.serviceType) newErrors.serviceType = 'Sélectionnez un type de service';
      break;
    
    case 2: // Détails spécifiques
      if (clientNeeds.serviceType === 'entreprise') {
        if (!clientNeeds.teamSize) newErrors.teamSize = 'La taille de l\'équipe est requise';
        if (!clientNeeds.frequency) newErrors.frequency = 'La fréquence est requise';
      } else if (clientNeeds.serviceType === 'particulier') {
        if (!clientNeeds.frequency) newErrors.frequency = 'La fréquence est requise';
      } else if (clientNeeds.serviceType === 'evenement') {
        if (!clientNeeds.eventType) newErrors.eventType = 'Le type d\'événement est requis';
        if (!clientNeeds.eventDate) newErrors.eventDate = 'La date est requise';
        if (!clientNeeds.eventTime) newErrors.eventTime = 'L\'heure est requise';
        if (clientNeeds.guestCount <= 0) newErrors.guestCount = 'Le nombre d\'invités doit être supérieur à 0';
        if (!clientNeeds.location.trim()) newErrors.location = 'Le lieu est requis';
      }
      break;
    
    case 3: // Préférences culinaires
      if (clientNeeds.cuisinePreferences.length === 0) {
        newErrors.cuisinePreferences = 'Sélectionnez au moins une préférence culinaire';
      }
      break;
    
    case 4: // Services additionnels
      if (!clientNeeds.budget) newErrors.budget = 'Le budget est requis';
      break;
  }

  return newErrors;
};

export const handleArrayToggle = (array: string[], value: string): string[] => {
  if (array.includes(value)) {
    return array.filter(item => item !== value);
  } else {
    return [...array, value];
  }
};

export const formatWhatsAppMessage = (clientNeeds: ClientNeeds): string => {
  const serviceTypeLabel = SERVICE_TYPES.find(t => t.id === clientNeeds.serviceType)?.name || clientNeeds.serviceType;
  const budgetLabel = BUDGET_RANGES.find(b => b.id === clientNeeds.budget)?.name || clientNeeds.budget;
  
  const cuisinePrefs = clientNeeds.cuisinePreferences
    .map(id => CUISINE_PREFERENCES.find(c => c.id === id)?.name)
    .filter(Boolean)
    .join(', ');
  
  const dietaryRest = clientNeeds.dietaryRestrictions
    .map(id => DIETARY_RESTRICTIONS.find(d => d.id === id)?.name)
    .filter(Boolean)
    .join(', ');
  
  const servicesList = clientNeeds.services
    .map(id => SERVICES.find(s => s.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  let message = `🍽️ Demande de devis - Le Cadre\n\n`
    + `👤 INFORMATIONS CLIENT:\n`
    + `Nom: ${clientNeeds.name}\n`
    + `Email: ${clientNeeds.email}\n`
    + `Téléphone: ${clientNeeds.phone}\n\n`
    + `🎯 TYPE DE SERVICE:\n`
    + `Service: ${serviceTypeLabel}\n\n`;

  // Détails spécifiques selon le type de service
  if (clientNeeds.serviceType === 'entreprise') {
    const teamSizeLabel = TEAM_SIZES.find(t => t.id === clientNeeds.teamSize)?.name || clientNeeds.teamSize;
    const frequencyLabel = ENTERPRISE_FREQUENCIES.find(f => f.id === clientNeeds.frequency)?.name || clientNeeds.frequency;
    message += `🏢 DÉTAILS ENTREPRISE:\n`
      + `Taille équipe: ${teamSizeLabel}\n`
      + `Fréquence: ${frequencyLabel}\n\n`;
  } else if (clientNeeds.serviceType === 'particulier') {
    const frequencyLabel = INDIVIDUAL_FREQUENCIES.find(f => f.id === clientNeeds.frequency)?.name || clientNeeds.frequency;
    message += `👤 DÉTAILS PARTICULIER:\n`
      + `Fréquence: ${frequencyLabel}\n\n`;
  } else if (clientNeeds.serviceType === 'evenement') {
    const eventTypeLabel = EVENT_TYPES.find(t => t.id === clientNeeds.eventType)?.name || clientNeeds.eventType;
    message += `📅 DÉTAILS DE L'ÉVÉNEMENT:\n`
      + `Type: ${eventTypeLabel}\n`
      + `Date: ${clientNeeds.eventDate}\n`
      + `Heure: ${clientNeeds.eventTime}\n`
      + `Nombre d'invités: ${clientNeeds.guestCount}\n`
      + `Lieu: ${clientNeeds.location}\n\n`;
  }

  message += `🍽️ PRÉFÉRENCES CULINAIRES:\n`
    + `Cuisines: ${cuisinePrefs}\n`
    + (dietaryRest ? `Restrictions: ${dietaryRest}\n` : '')
    + (clientNeeds.allergies ? `Allergies: ${clientNeeds.allergies}\n` : '')
    + `\n⭐ SERVICES ADDITIONNELS:\n`
    + `Services: ${servicesList}\n`
    + `Budget: ${budgetLabel}\n\n`
    + (clientNeeds.specialRequests ? `💬 DEMANDES SPÉCIALES:\n${clientNeeds.specialRequests}\n\n` : '')
    + `📍 RÉFÉRENCE:\n`
    + `Client précédent: ${clientNeeds.previousExperience ? 'Oui' : 'Non'}\n`
    + (clientNeeds.referralSource ? `Source: ${clientNeeds.referralSource}\n` : '');

  return encodeURIComponent(message);
};