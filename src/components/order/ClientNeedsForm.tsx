'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faCalendarAlt, 
  faUtensils, 
  faClock,
  faMapMarkerAlt,
  faHeart,
  faAllergies,
  faComments,
  faCheck,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

interface ClientNeedsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClientNeeds {
  // Informations personnelles
  name: string;
  email: string;
  phone: string;
  
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

const defaultClientNeeds: ClientNeeds = {
  name: '',
  email: '',
  phone: '',
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

const EVENT_TYPES = [
  { id: 'birthday', name: 'Anniversaire', icon: '🎂' },
  { id: 'wedding', name: 'Mariage', icon: '💒' },
  { id: 'corporate', name: 'Événement d\'entreprise', icon: '🏢' },
  { id: 'family', name: 'Réunion familiale', icon: '👨‍👩‍👧‍👦' },
  { id: 'graduation', name: 'Remise de diplôme', icon: '🎓' },
  { id: 'other', name: 'Autre', icon: '🎉' }
];

const CUISINE_PREFERENCES = [
  { id: 'traditional', name: 'Cuisine traditionnelle sénégalaise' },
  { id: 'international', name: 'Cuisine internationale' },
  { id: 'fusion', name: 'Cuisine fusion' },
  { id: 'vegetarian', name: 'Options végétariennes' },
  { id: 'seafood', name: 'Fruits de mer' },
  { id: 'grilled', name: 'Grillades' }
];

const DIETARY_RESTRICTIONS = [
  { id: 'vegetarian', name: 'Végétarien' },
  { id: 'vegan', name: 'Végétalien' },
  { id: 'halal', name: 'Halal' },
  { id: 'gluten-free', name: 'Sans gluten' },
  { id: 'dairy-free', name: 'Sans lactose' },
  { id: 'nut-free', name: 'Sans noix' }
];

const SERVICES = [
  { id: 'catering', name: 'Service traiteur', description: 'Livraison de plats préparés' },
  { id: 'chef', name: 'Chef à domicile', description: 'Chef qui cuisine chez vous' },
  { id: 'waitstaff', name: 'Personnel de service', description: 'Serveurs pour votre événement' },
  { id: 'decoration', name: 'Décoration de table', description: 'Mise en place et décoration' },
  { id: 'equipment', name: 'Location d\'équipement', description: 'Tables, chaises, vaisselle' }
];

const BUDGET_RANGES = [
  { id: 'budget1', name: 'Moins de 50 000 FCFA' },
  { id: 'budget2', name: '50 000 - 100 000 FCFA' },
  { id: 'budget3', name: '100 000 - 200 000 FCFA' },
  { id: 'budget4', name: '200 000 - 500 000 FCFA' },
  { id: 'budget5', name: 'Plus de 500 000 FCFA' }
];

const ClientNeedsForm = ({ isOpen, onClose }: ClientNeedsFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [clientNeeds, setClientNeeds] = useState<ClientNeeds>(defaultClientNeeds);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 'personal', title: 'Informations personnelles', icon: faUser },
    { id: 'event', title: 'Détails de l\'événement', icon: faCalendarAlt },
    { id: 'preferences', title: 'Préférences culinaires', icon: faUtensils },
    { id: 'services', title: 'Services souhaités', icon: faClock },
    { id: 'additional', title: 'Informations supplémentaires', icon: faComments }
  ];

  const handleClose = () => {
    setClientNeeds(defaultClientNeeds);
    setCurrentStep(0);
    setErrors({});
    onClose();
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Informations personnelles
        if (!clientNeeds.name.trim()) newErrors.name = 'Le nom est requis';
        if (!clientNeeds.email.trim()) newErrors.email = 'L\'email est requis';
        else if (!/\S+@\S+\.\S+/.test(clientNeeds.email)) newErrors.email = 'Email invalide';
        if (!clientNeeds.phone.trim()) newErrors.phone = 'Le téléphone est requis';
        break;
      
      case 1: // Détails de l'événement
        if (!clientNeeds.eventType) newErrors.eventType = 'Le type d\'événement est requis';
        if (!clientNeeds.eventDate) newErrors.eventDate = 'La date est requise';
        if (!clientNeeds.eventTime) newErrors.eventTime = 'L\'heure est requise';
        if (clientNeeds.guestCount <= 0) newErrors.guestCount = 'Le nombre d\'invités doit être supérieur à 0';
        if (!clientNeeds.location.trim()) newErrors.location = 'Le lieu est requis';
        break;
      
      case 2: // Préférences culinaires
        if (clientNeeds.cuisinePreferences.length === 0) {
          newErrors.cuisinePreferences = 'Sélectionnez au moins une préférence culinaire';
        }
        break;
      
      case 3: // Services souhaités
        if (clientNeeds.services.length === 0) {
          newErrors.services = 'Sélectionnez au moins un service';
        }
        if (!clientNeeds.budget) newErrors.budget = 'Le budget est requis';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleArrayToggle = (array: string[], value: string, setter: (newArray: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(item => item !== value));
    } else {
      setter([...array, value]);
    }
  };

  const formatWhatsAppMessage = () => {
    const eventTypeLabel = EVENT_TYPES.find(t => t.id === clientNeeds.eventType)?.name || clientNeeds.eventType;
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

    return encodeURIComponent(
      `🍽️ Demande de devis - Le Cadre\n\n`
      + `👤 INFORMATIONS CLIENT:\n`
      + `Nom: ${clientNeeds.name}\n`
      + `Email: ${clientNeeds.email}\n`
      + `Téléphone: ${clientNeeds.phone}\n\n`
      + `📅 DÉTAILS DE L'ÉVÉNEMENT:\n`
      + `Type: ${eventTypeLabel}\n`
      + `Date: ${clientNeeds.eventDate}\n`
      + `Heure: ${clientNeeds.eventTime}\n`
      + `Nombre d'invités: ${clientNeeds.guestCount}\n`
      + `Lieu: ${clientNeeds.location}\n\n`
      + `🍽️ PRÉFÉRENCES CULINAIRES:\n`
      + `Cuisines: ${cuisinePrefs}\n`
      + (dietaryRest ? `Restrictions: ${dietaryRest}\n` : '')
      + (clientNeeds.allergies ? `Allergies: ${clientNeeds.allergies}\n` : '')
      + `\n🎯 SERVICES SOUHAITÉS:\n`
      + `Services: ${servicesList}\n`
      + `Budget: ${budgetLabel}\n\n`
      + (clientNeeds.specialRequests ? `💬 DEMANDES SPÉCIALES:\n${clientNeeds.specialRequests}\n\n` : '')
      + `📍 RÉFÉRENCE:\n`
      + `Client précédent: ${clientNeeds.previousExperience ? 'Oui' : 'Non'}\n`
      + (clientNeeds.referralSource ? `Source: ${clientNeeds.referralSource}\n` : '')
    );
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    window.open(`https://wa.me/+221771595352?text=${formatWhatsAppMessage()}`, '_blank');
    
    setIsSubmitting(false);
    handleClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Informations personnelles
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                value={clientNeeds.name}
                onChange={(e) => setClientNeeds({ ...clientNeeds, name: e.target.value })}
                placeholder="Votre nom complet"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={clientNeeds.email}
                onChange={(e) => setClientNeeds({ ...clientNeeds, email: e.target.value })}
                placeholder="votre@email.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                value={clientNeeds.phone}
                onChange={(e) => setClientNeeds({ ...clientNeeds, phone: e.target.value })}
                placeholder="+221 XX XXX XX XX"
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>
        );

      case 1: // Détails de l'événement
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Type d'événement *</Label>
              <div className="grid grid-cols-2 gap-3">
                {EVENT_TYPES.map((type) => (
                  <Card 
                    key={type.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      clientNeeds.eventType === type.id 
                        ? 'ring-2 ring-amber-500 bg-amber-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setClientNeeds({ ...clientNeeds, eventType: type.id })}
                  >
                    <CardContent className="p-3 text-center">
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm font-medium">{type.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Date de l'événement *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={clientNeeds.eventDate}
                  onChange={(e) => setClientNeeds({ ...clientNeeds, eventDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.eventDate ? 'border-red-500' : ''}
                />
                {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="eventTime">Heure *</Label>
                <Input
                  id="eventTime"
                  type="time"
                  value={clientNeeds.eventTime}
                  onChange={(e) => setClientNeeds({ ...clientNeeds, eventTime: e.target.value })}
                  className={errors.eventTime ? 'border-red-500' : ''}
                />
                {errors.eventTime && <p className="text-red-500 text-sm">{errors.eventTime}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guestCount">Nombre d'invités *</Label>
              <Input
                id="guestCount"
                type="number"
                min="1"
                value={clientNeeds.guestCount || ''}
                onChange={(e) => setClientNeeds({ ...clientNeeds, guestCount: parseInt(e.target.value) || 0 })}
                placeholder="Nombre de personnes"
                className={errors.guestCount ? 'border-red-500' : ''}
              />
              {errors.guestCount && <p className="text-red-500 text-sm">{errors.guestCount}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Lieu de l'événement *</Label>
              <Input
                id="location"
                value={clientNeeds.location}
                onChange={(e) => setClientNeeds({ ...clientNeeds, location: e.target.value })}
                placeholder="Adresse ou lieu de l'événement"
                className={errors.location ? 'border-red-500' : ''}
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>
          </div>
        );

      case 2: // Préférences culinaires
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Préférences culinaires *</Label>
              <div className="space-y-2">
                {CUISINE_PREFERENCES.map((pref) => (
                  <div key={pref.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={pref.id}
                      checked={clientNeeds.cuisinePreferences.includes(pref.id)}
                      onCheckedChange={() => 
                        handleArrayToggle(
                          clientNeeds.cuisinePreferences, 
                          pref.id, 
                          (newArray) => setClientNeeds({ ...clientNeeds, cuisinePreferences: newArray })
                        )
                      }
                    />
                    <Label htmlFor={pref.id} className="text-sm font-normal cursor-pointer">
                      {pref.name}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.cuisinePreferences && <p className="text-red-500 text-sm">{errors.cuisinePreferences}</p>}
            </div>
            
            <div className="space-y-3">
              <Label>Restrictions alimentaires</Label>
              <div className="space-y-2">
                {DIETARY_RESTRICTIONS.map((restriction) => (
                  <div key={restriction.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={restriction.id}
                      checked={clientNeeds.dietaryRestrictions.includes(restriction.id)}
                      onCheckedChange={() => 
                        handleArrayToggle(
                          clientNeeds.dietaryRestrictions, 
                          restriction.id, 
                          (newArray) => setClientNeeds({ ...clientNeeds, dietaryRestrictions: newArray })
                        )
                      }
                    />
                    <Label htmlFor={restriction.id} className="text-sm font-normal cursor-pointer">
                      {restriction.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies spécifiques</Label>
              <Input
                id="allergies"
                value={clientNeeds.allergies}
                onChange={(e) => setClientNeeds({ ...clientNeeds, allergies: e.target.value })}
                placeholder="Mentionnez toute allergie alimentaire spécifique"
              />
            </div>
          </div>
        );

      case 3: // Services souhaités
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Services souhaités *</Label>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      clientNeeds.services.includes(service.id)
                        ? 'ring-2 ring-amber-500 bg-amber-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => 
                      handleArrayToggle(
                        clientNeeds.services, 
                        service.id, 
                        (newArray) => setClientNeeds({ ...clientNeeds, services: newArray })
                      )
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                        {clientNeeds.services.includes(service.id) && (
                          <FontAwesomeIcon icon={faCheck} className="text-amber-500" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
            </div>
            
            <div className="space-y-2">
              <Label>Budget estimé *</Label>
              <Select
                value={clientNeeds.budget}
                onValueChange={(value) => setClientNeeds({ ...clientNeeds, budget: value })}
              >
                <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Sélectionnez votre budget" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_RANGES.map((budget) => (
                    <SelectItem key={budget.id} value={budget.id}>
                      {budget.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
            </div>
          </div>
        );

      case 4: // Informations supplémentaires
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Demandes spéciales</Label>
              <textarea
                id="specialRequests"
                value={clientNeeds.specialRequests}
                onChange={(e) => setClientNeeds({ ...clientNeeds, specialRequests: e.target.value })}
                placeholder="Décrivez toute demande spéciale, thème particulier, ou information importante..."
                className="w-full p-3 border border-gray-300 rounded-md resize-none h-24 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-3">
              <Label>Avez-vous déjà fait appel à nos services ?</Label>
              <RadioGroup
                value={clientNeeds.previousExperience.toString()}
                onValueChange={(value) => setClientNeeds({ ...clientNeeds, previousExperience: value === 'true' })}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="exp-yes" />
                  <Label htmlFor="exp-yes">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="exp-no" />
                  <Label htmlFor="exp-no">Non</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="referralSource">Comment avez-vous entendu parler de nous ?</Label>
              <Select
                value={clientNeeds.referralSource}
                onValueChange={(value) => setClientNeeds({ ...clientNeeds, referralSource: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social-media">Réseaux sociaux</SelectItem>
                  <SelectItem value="google">Recherche Google</SelectItem>
                  <SelectItem value="referral">Recommandation d'un ami</SelectItem>
                  <SelectItem value="website">Site web</SelectItem>
                  <SelectItem value="event">Lors d'un événement</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Résumé de la demande */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-900">Résumé de votre demande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Événement:</strong> {EVENT_TYPES.find(t => t.id === clientNeeds.eventType)?.name} - {clientNeeds.guestCount} invités</p>
                <p><strong>Date:</strong> {clientNeeds.eventDate} à {clientNeeds.eventTime}</p>
                <p><strong>Lieu:</strong> {clientNeeds.location}</p>
                <p><strong>Services:</strong> {clientNeeds.services.map(id => SERVICES.find(s => s.id === id)?.name).join(', ')}</p>
                <p><strong>Budget:</strong> {BUDGET_RANGES.find(b => b.id === clientNeeds.budget)?.name}</p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-amber-900 flex items-center gap-2">
            <FontAwesomeIcon icon={faUtensils} className="text-amber-600" />
            Demande de devis personnalisé
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  ${index <= currentStep 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  {index < currentStep ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={step.icon} />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    w-12 h-1 mx-2
                    ${index < currentStep ? 'bg-amber-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>

          {/* Step title */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {steps[currentStep].title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Étape {currentStep + 1} sur {steps.length}
            </p>
          </div>

          {/* Step content */}
          <div className="min-h-[400px]">
            {renderStepContent()}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Précédent
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={nextStep}
                className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2"
              >
                Suivant
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer la demande'}
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientNeedsForm;