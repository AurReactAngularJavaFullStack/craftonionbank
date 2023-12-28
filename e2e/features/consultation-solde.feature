Fonctionnalité: Consultation de solde
  Scénario: Consultation réussie du solde du compte
    Étant donné un compte client avec un solde de 150€
    Quand le client consulte son solde
    Alors le solde affiché doit être 150€

  Scénario: Consultation du solde avec un compte inexistant
    Étant donné un compte client inconnu
    Quand le client tente de consulter le solde
    Alors une erreur est signalée
