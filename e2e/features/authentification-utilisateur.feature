Fonctionnalité: Authentification de l'utilisateur
  Scénario: Connexion réussie avec des identifiants valides
    Étant donné que l'utilisateur a un identifiant "utilisateur123" et un mot de passe "MotDePasse123"
    Quand l'utilisateur se connecte avec l'identifiant "utilisateur123" et le mot de passe "MotDePasse123"
    Alors l'utilisateur obtient l'accès à son tableau de bord

  Scénario: Échec de connexion avec des identifiants invalides
    Étant donné que l'utilisateur a un identifiant "utilisateur123" et un mot de passe "MotDePasse123"
    Quand l'utilisateur se connecte avec l'identifiant "utilisateur123" et un mot de passe incorrect
    Alors l'accès à son tableau de bord est refusé
