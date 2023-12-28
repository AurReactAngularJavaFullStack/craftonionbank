import { Injectable } from '@angular/core';

/*Dans ce service :
Un objet comptes est utilisé pour stocker 
les soldes des comptes A et B.
La méthode initialiserComptes prend un objet
avec les soldes initiaux pour les comptes A
et B et les assigne aux propriétés 
correspondantes.
La méthode effectuerVirement vérifie si le 
compte source a suffisamment de fonds avant 
de procéder au virement. 
Elle retourne true si le virement est réussi
et false si les fonds sont insuffisants.
La méthode obtenirSolde renvoie le solde du 
compte spécifié.
Cette implémentation devrait passer les tests
unitaires fournis dans votre fichier de 
spécification de test Jasmine. 
Elle contient la logique nécessaire pour 
initialiser les soldes des comptes, 
effectuer des virements entre eux et 
obtenir le solde actuel d'un compte donné.*/
@Injectable({
  providedIn: 'root'
})
export class VirementService {
  // Define the comptes object to accept string indexes returning a number.
  private comptes: { [key: string]: number } = {
    A: 0,
    B: 0
  };

  constructor() { }

  initialiserComptes(soldes: { compteA: number; compteB: number }): void {
    this.comptes['A'] = soldes.compteA;
    this.comptes['B'] = soldes.compteB;
  }

  effectuerVirement(virement: { deCompte: string; versCompte: string; montant: number }): boolean {
    // Make sure the deCompte and versCompte are valid keys in comptes.
    if (virement.deCompte in this.comptes && virement.versCompte in this.comptes) {
      if (this.comptes[virement.deCompte] >= virement.montant) {
        this.comptes[virement.deCompte] -= virement.montant;
        this.comptes[virement.versCompte] += virement.montant;
        return true;
      }
    }
    return false; // Return false if the accounts are invalid or funds are insufficient
  }

  obtenirSolde(compte: string): number {
    if (compte in this.comptes) {
      return this.comptes[compte];
    }
    throw new Error('Compte non reconnu'); // Handle the case where the account is not recognized
  }
}