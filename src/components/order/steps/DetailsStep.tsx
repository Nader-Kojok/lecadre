import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ClientNeeds } from '../types/ClientNeedsTypes';
import {
  EVENT_TYPES,
  TEAM_SIZES,
  ENTERPRISE_FREQUENCIES,
  INDIVIDUAL_FREQUENCIES
} from '../constants/ClientNeedsConstants';

interface DetailsStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  errors: Record<string, string>;
}

export default function DetailsStep({ clientNeeds, setClientNeeds, errors }: DetailsStepProps) {
  if (clientNeeds.serviceType === 'evenement') {
    return (
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="text-center">
            <Label className="text-lg font-semibold text-gray-800">Quel type d'événement organisez-vous ? ✨</Label>
            <p className="text-sm text-gray-600 mt-1">Choisissez celui qui correspond le mieux à votre projet</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EVENT_TYPES.map((type) => (
              <Card 
                key={type.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  clientNeeds.eventType === type.id 
                    ? 'ring-2 ring-[#006464] bg-gradient-to-br ' + type.color + ' text-white shadow-lg scale-105' 
                    : 'hover:bg-gray-50 border-2 border-gray-200'
                }`}
                onClick={() => setClientNeeds({ ...clientNeeds, eventType: type.id })}
              >
                <CardContent className="p-4 text-center relative overflow-hidden">
                  {clientNeeds.eventType === type.id && (
                    <div className="absolute top-2 right-2">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-lg" />
                    </div>
                  )}
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h3 className={`font-bold text-sm mb-1 ${
                    clientNeeds.eventType === type.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {type.name}
                  </h3>
                  <p className={`text-xs ${
                    clientNeeds.eventType === type.id ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {errors.eventType && <p className="text-red-500 text-sm text-center">⚠️ {errors.eventType}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="eventDate" className="text-base font-medium text-gray-700">Date de l'événement 📅</Label>
            <Input
              id="eventDate"
              type="date"
              value={clientNeeds.eventDate}
              onChange={(e) => setClientNeeds({ ...clientNeeds, eventDate: e.target.value })}
              className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
                errors.eventDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
            />
            {errors.eventDate && <p className="text-red-500 text-sm">⚠️ {errors.eventDate}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="eventTime" className="text-base font-medium text-gray-700">Heure de l'événement ⏰</Label>
            <Input
              id="eventTime"
              type="time"
              value={clientNeeds.eventTime}
              onChange={(e) => setClientNeeds({ ...clientNeeds, eventTime: e.target.value })}
              className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
                errors.eventTime ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
            />
            {errors.eventTime && <p className="text-red-500 text-sm">⚠️ {errors.eventTime}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="guestCount" className="text-base font-medium text-gray-700">Nombre d'invités 👥</Label>
            <Input
              id="guestCount"
              type="number"
              min="1"
              value={clientNeeds.guestCount || ''}
              onChange={(e) => setClientNeeds({ ...clientNeeds, guestCount: parseInt(e.target.value) || 0 })}
              placeholder="Ex: 50"
              className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
                errors.guestCount ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
            />
            {errors.guestCount && <p className="text-red-500 text-sm">⚠️ {errors.guestCount}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location" className="text-base font-medium text-gray-700">Lieu de l'événement 📍</Label>
            <Input
              id="location"
              value={clientNeeds.location}
              onChange={(e) => setClientNeeds({ ...clientNeeds, location: e.target.value })}
              placeholder="Adresse ou nom du lieu"
              className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
                errors.location ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
            />
            {errors.location && <p className="text-red-500 text-sm">⚠️ {errors.location}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (clientNeeds.serviceType === 'entreprise') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Label className="text-lg font-semibold text-gray-800">Détails de votre équipe 🏢</Label>
          <p className="text-sm text-gray-600 mt-1">Aidez-nous à adapter notre service à vos besoins</p>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium text-gray-700">Taille de votre équipe</Label>
          <div className="grid grid-cols-1 gap-3">
            {TEAM_SIZES.map((size) => (
              <Card
                key={size.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  clientNeeds.teamSize === size.id
                    ? 'border-[#006464] bg-[#006464]/5 shadow-md'
                    : 'border-gray-200 hover:border-[#006464]/50'
                }`}
                onClick={() => setClientNeeds({ ...clientNeeds, teamSize: size.id })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold ${
                      clientNeeds.teamSize === size.id ? 'text-[#006464]' : 'text-gray-800'
                    }`}>
                      {size.name}
                    </h3>
                    <p className="text-sm text-gray-600">{size.price}</p>
                  </div>
                  {clientNeeds.teamSize === size.id && (
                    <FontAwesomeIcon icon={faCheck} className="text-[#006464] text-lg" />
                  )}
                </div>
              </Card>
            ))}
          </div>
          {errors.teamSize && <p className="text-red-500 text-sm">⚠️ {errors.teamSize}</p>}
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium text-gray-700">Fréquence souhaitée</Label>
          <div className="grid grid-cols-1 gap-3">
            {ENTERPRISE_FREQUENCIES.map((freq) => (
              <Card
                key={freq.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  clientNeeds.frequency === freq.id
                    ? 'border-[#006464] bg-[#006464]/5 shadow-md'
                    : 'border-gray-200 hover:border-[#006464]/50'
                }`}
                onClick={() => setClientNeeds({ ...clientNeeds, frequency: freq.id })}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold ${
                      clientNeeds.frequency === freq.id ? 'text-[#006464]' : 'text-gray-800'
                    }`}>
                      {freq.name}
                    </h3>
                    <p className="text-sm text-gray-600">{freq.description}</p>
                  </div>
                  {clientNeeds.frequency === freq.id && (
                    <FontAwesomeIcon icon={faCheck} className="text-[#006464] text-lg" />
                  )}
                </div>
              </Card>
            ))}
          </div>
          {errors.frequency && <p className="text-red-500 text-sm">⚠️ {errors.frequency}</p>}
        </div>
      </div>
    );
  }

  if (clientNeeds.serviceType === 'particulier') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Label className="text-lg font-semibold text-gray-800">Choisissez votre formule 👤</Label>
          <p className="text-sm text-gray-600 mt-1">Sélectionnez l'abonnement qui vous convient</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {INDIVIDUAL_FREQUENCIES.map((freq) => (
            <Card
              key={freq.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                clientNeeds.frequency === freq.id
                  ? 'border-[#006464] bg-[#006464]/5 shadow-lg transform scale-[1.02]'
                  : 'border-gray-200 hover:border-[#006464]/50'
              }`}
              onClick={() => setClientNeeds({ ...clientNeeds, frequency: freq.id })}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    clientNeeds.frequency === freq.id ? 'text-[#006464]' : 'text-gray-800'
                  }`}>
                    {freq.name}
                  </h3>
                  <p className="text-gray-600">{freq.description}</p>
                </div>
                {clientNeeds.frequency === freq.id && (
                  <div className="text-[#006464]">
                    <FontAwesomeIcon icon={faCheck} className="text-2xl" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        {errors.frequency && <p className="text-red-500 text-sm text-center">⚠️ {errors.frequency}</p>}
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <p className="text-gray-600">Veuillez d'abord sélectionner un type de service.</p>
    </div>
  );
}