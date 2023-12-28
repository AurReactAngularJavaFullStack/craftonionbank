import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CompteBancaireService } from '../../src/app/application/services/compte-bancaire.service';

let compteService = new CompteBancaireService();
let soldeAffiche: number;
let accountId: number; // ID du compte pour les tests

Given('un compte client avec un ID {int} et un solde de {int}€', function (id: number, soldeInitial: number) {
  accountId = id; // Initialiser l'ID du compte
  compteService.initialiserSolde(soldeInitial, id); // Passer l'ID du compte
});

When('le client avec ID {int} dépose {int}€', function (id: number, montant: number) {
  if (id !== accountId) {
    throw new Error("ID de compte non correspondant");
  }
  compteService.deposer(id, montant); // Passer l'ID du compte et le montant
});

When('le client avec ID {int} retire {int}€', function (id: number, montant: number) {
  if (id !== accountId) {
    throw new Error("ID de compte non correspondant");
  }
  compteService.retirer(id, montant); // Passer l'ID du compte et le montant
});

Then('le solde total doit être {int}€', function (soldeAttendu: number) {
  soldeAffiche = compteService.consulterSolde(accountId); // Utiliser l'ID du compte
  expect(soldeAffiche).to.equal(soldeAttendu);
});
