Fonctionnalité: Gestion des données personnelles
  Scénario: Modification réussie de l'adresse email du client
    Étant donné un client avec l'adresse email "client@example.com"
    Quand le client change son adresse email en "nouveau@example.com"
    Alors la nouvelle adresse email doit être "nouveau@example.com"

  Scénario: Échec de modification de l'adresse email en raison d'un format invalide
    Étant donné un client avec l'adresse email "client@example.com"
    Quand le client tente de changer son adresse email en "adresseincorrecte"
    Alors un message d'erreur est affiché
