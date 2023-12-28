import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionCompteService {

  /*This service class now has:
  A solde property to keep track of the 
  balance.
  An initialiserSolde method to set the 
  initial balance.
  A consulterSolde method to return the 
  current balance.
  A deposer method to deposit money into 
  the account, which includes a check for 
  negative amounts.
  A retirer method to withdraw money from 
  the account, which checks for sufficient 
  funds and negative amounts.
  These methods should allow the 
  GestionCompteService to pass the Jasmine 
  tests written for it. 
  Remember to handle errors appropriately 
  in your application's user interface, 
  such as displaying messages for errors 
  thrown by these service methods.*/
  private solde: number = 0;

  constructor() { }

  initialiserSolde(soldeInitial: number): void {
    this.solde = soldeInitial;
  }

  consulterSolde(): number {
    return this.solde;
  }

  deposer(montant: number): void {
    // In a real-world scenario, you would want to check if the amount is positive.
    if (montant < 0) {
      throw new Error('Le montant à déposer doit être un nombre positif.');
    }
    this.solde += montant;
  }

  retirer(montant: number): void {
    // Check for sufficient funds and positive withdrawal amount.
    if (montant < 0) {
      throw new Error('Le montant à retirer doit être un nombre positif.');
    }
    if (this.solde >= montant) {
      this.solde -= montant;
    } else {
      throw new Error('Fonds insuffisants pour le retrait demandé.');
    }
  }
}
