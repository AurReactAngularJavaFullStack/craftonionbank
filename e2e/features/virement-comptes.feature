Fonctionnalité: Virement entre comptes
  Scénario: Virement réussi d'un compte à un autre
    Étant donné le compte A avec un solde de 300€
    Et le compte B avec un solde de 100€
    Quand le client transfère 50€ du compte A au compte B
    Alors le solde du compte A doit être 250€
    Et le solde du compte B doit être 150€

  Scénario: Échec de virement en raison de fonds insuffisants
    Étant donné le compte A avec un solde de 30€
    Et le compte B avec un solde de 100€
    Quand le client tente de transférer 50€ du compte A au compte B
    Alors le transfert échoue
    Et le solde du compte A reste à 30€
    Et le solde du compte B reste à 100€
