# bank.feature

# Fonctionnalité: Gestion de Compte
Fonctionnalité: Gestion de compte
  Scénario: Dépôt sur un compte
    Étant donné un compte client avec un solde initial de 100€
    Quand le client dépose 50€
    Alors le solde total doit être 150€

  Scénario: Retrait d'un compte
    Étant donné un compte client avec un solde de 200€
    Quand le client retire 50€
    Alors le solde total doit être 150€

# Fonctionnalité: Notification de Transactions
Fonctionnalité: Notification de transactions
  Scénario: Recevoir une notification après une transaction
    Étant donné une transaction de 100€ effectuée sur le compte du client
    Quand la transaction est complétée
    Alors le client reçoit une notification de la transaction
