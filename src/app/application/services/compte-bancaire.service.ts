import { Injectable } from '@angular/core';
/*Dans cette version :
La méthode deposer lance une exception si le montant 
est négatif, indiquant que le montant du dépôt doit 
être positif.
La méthode retirer lance une exception si le montant 
est négatif ou si le montant à retirer est supérieur 
au solde disponible, fournissant ainsi un feedback 
clair sur la raison pour laquelle l'opération ne peut
pas être effectuée.
Ces ajouts garantissent que votre service gère 
correctement les situations d'erreur et fournit des 
informations utiles en cas de problèmes, ce qui est 
essentiel pour maintenir la robustesse et la 
fiabilité de votre application.*/
@Injectable({
  providedIn: 'root'
})
export class CompteBancaireService {
  private comptes: { [id: number]: number } = {}; // Simulating a database of accounts with their balances

  constructor() {}

  initialiserSolde(soldeInitial: number, id: number): void {
    this.comptes[id] = soldeInitial;
  }

  consulterSolde(accountId: number): number {
    return this.comptes[accountId];
  }

  deposer(accountId: number, montant: number): void {
    if (montant > 0) {
      this.comptes[accountId] = (this.comptes[accountId] || 0) + montant;
    } else {
      throw new Error("Le montant du dépôt doit être positif.");
    }
  }

  retirer(accountId: number, montant: number): void {
    if (montant <= 0) {
      throw new Error("Le montant du retrait doit être positif.");
    } else if ((this.comptes[accountId] || 0) < montant) {
      throw new Error("Fonds insuffisants pour effectuer ce retrait.");
    } else {
      this.comptes[accountId] -= montant;
    }
  }

  transfer(fromId: number, toId: number, amount: number): boolean {
    if (amount <= 0) {
      throw new Error("Le montant du virement doit être positif.");
    }
    if ((this.comptes[fromId] || 0) < amount) {
      throw new Error("Fonds insuffisants pour effectuer ce virement.");
    }
    this.comptes[fromId] -= amount;
    this.comptes[toId] = (this.comptes[toId] || 0) + amount;
    return true;
  }

  getBalance(accountId: number): number {
    if (this.comptes[accountId] === undefined) {
      throw new Error("Compte non trouvé.");
    }
    return this.comptes[accountId];
  }
}
