import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUtensils, faCalendarAlt, faHeart, faStar, faComments } from '@fortawesome/free-solid-svg-icons';
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

interface SummaryStepProps {
  clientNeeds: ClientNeeds;
}

export default function SummaryStep({ clientNeeds }: SummaryStepProps) {
  const serviceTypeLabel = SERVICE_TYPES.find(t => t.id === clientNeeds.serviceType)?.name || clientNeeds.serviceType;
  const budgetLabel = BUDGET_RANGES.find(b => b.id === clientNeeds.budget)?.name || clientNeeds.budget;
  
  const cuisinePrefs = clientNeeds.cuisinePreferences
    .map(id => CUISINE_PREFERENCES.find(c => c.id === id)?.name)
    .filter(Boolean);
  
  const dietaryRest = clientNeeds.dietaryRestrictions
    .map(id => DIETARY_RESTRICTIONS.find(d => d.id === id)?.name)
    .filter(Boolean);
  
  const servicesList = clientNeeds.services
    .map(id => SERVICES.find(s => s.id === id)?.name)
    .filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Label className="text-lg font-semibold text-gray-800">Récapitulatif de votre demande ✅</Label>
        <p className="text-sm text-gray-600 mt-1">Vérifiez vos informations avant envoi</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Informations personnelles */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FontAwesomeIcon icon={faUser} className="text-[#006464]" />
              Vos informations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Nom:</span>
              <span className="font-medium">{clientNeeds.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{clientNeeds.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Téléphone:</span>
              <span className="font-medium">{clientNeeds.phone}</span>
            </div>
          </CardContent>
        </Card>

        {/* Type de service */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FontAwesomeIcon icon={faUtensils} className="text-[#006464]" />
              Type de service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="font-medium text-[#006464]">{serviceTypeLabel}</span>
          </CardContent>
        </Card>

        {/* Détails spécifiques */}
        {clientNeeds.serviceType && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#006464]" />
                Détails spécifiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {clientNeeds.serviceType === 'entreprise' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taille équipe:</span>
                    <span className="font-medium">
                      {TEAM_SIZES.find(t => t.id === clientNeeds.teamSize)?.name || clientNeeds.teamSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fréquence:</span>
                    <span className="font-medium">
                      {ENTERPRISE_FREQUENCIES.find(f => f.id === clientNeeds.frequency)?.name || clientNeeds.frequency}
                    </span>
                  </div>
                </>
              )}
              {clientNeeds.serviceType === 'particulier' && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Formule:</span>
                  <span className="font-medium">
                    {INDIVIDUAL_FREQUENCIES.find(f => f.id === clientNeeds.frequency)?.name || clientNeeds.frequency}
                  </span>
                </div>
              )}
              {clientNeeds.serviceType === 'evenement' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">
                      {EVENT_TYPES.find(t => t.id === clientNeeds.eventType)?.name || clientNeeds.eventType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{clientNeeds.eventDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Heure:</span>
                    <span className="font-medium">{clientNeeds.eventTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Invités:</span>
                    <span className="font-medium">{clientNeeds.guestCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lieu:</span>
                    <span className="font-medium">{clientNeeds.location}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {/* Préférences culinaires */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FontAwesomeIcon icon={faHeart} className="text-[#006464]" />
              Préférences culinaires
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="text-gray-600">Cuisines préférées:</span>
              <div className="mt-1">
                {cuisinePrefs.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {cuisinePrefs.map((pref, index) => (
                      <span key={index} className="bg-[#006464]/10 text-[#006464] px-2 py-1 rounded-full text-xs">
                        {pref}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm">Aucune préférence spécifiée</span>
                )}
              </div>
            </div>
            {dietaryRest.length > 0 && (
              <div>
                <span className="text-gray-600">Restrictions:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {dietaryRest.map((rest, index) => (
                    <span key={index} className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                      {rest}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {clientNeeds.allergies && (
              <div>
                <span className="text-gray-600">Allergies:</span>
                <p className="text-sm font-medium text-red-600">{clientNeeds.allergies}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Services et budget */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FontAwesomeIcon icon={faStar} className="text-[#006464]" />
              Services et budget
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="text-gray-600">Services additionnels:</span>
              <div className="mt-1">
                {servicesList.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {servicesList.map((service, index) => (
                      <span key={index} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm">Aucun service additionnel</span>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Budget:</span>
              <span className="font-medium text-green-600">{budgetLabel}</span>
            </div>
          </CardContent>
        </Card>

        {/* Informations supplémentaires */}
        {(clientNeeds.specialRequests || clientNeeds.referralSource || clientNeeds.previousExperience) && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <FontAwesomeIcon icon={faComments} className="text-[#006464]" />
                Informations supplémentaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {clientNeeds.specialRequests && (
                <div>
                  <span className="text-gray-600">Demandes spéciales:</span>
                  <p className="text-sm font-medium">{clientNeeds.specialRequests}</p>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Client précédent:</span>
                <span className="font-medium">{clientNeeds.previousExperience ? 'Oui' : 'Non'}</span>
              </div>
              {clientNeeds.referralSource && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Source:</span>
                  <span className="font-medium">{clientNeeds.referralSource}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">🚀</div>
          <div>
            <h3 className="font-semibold text-green-800 mb-1">Prêt à envoyer !</h3>
            <p className="text-sm text-green-700">
              Votre demande sera envoyée via WhatsApp à notre équipe qui vous contactera rapidement 
              pour finaliser les détails et vous proposer un devis personnalisé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}