Fonctionnalité: Notification de transactions
  Scénario: Recevoir une notification après une transaction réussie
    Étant donné une transaction de 100€ effectuée sur le compte du client
    Quand la transaction est complétée
    Alors le client reçoit une notification de la transaction

  Scénario: Aucune notification pour une transaction échouée
    Étant donné une tentative de transaction de 100€ sur le compte du client
    Quand la transaction échoue
    Alors le client ne reçoit pas de notification
