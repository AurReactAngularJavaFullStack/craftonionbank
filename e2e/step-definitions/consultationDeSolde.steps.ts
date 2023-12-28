import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CompteBancaireService } from '../../src/app/application/services/compte-bancaire.service';

let compteService = new CompteBancaireService();
let soldeAffiche: number;
let accountId: number; // Ajouté pour gérer l'ID du compte

Given('un compte client avec un ID {int} et un solde initial de {int}€', function (id: number, soldeInitial: number) {
  accountId = id; // Stocker l'ID du compte
  compteService.initialiserSolde(soldeInitial, id); // Passer l'ID du compte à la méthode
});

When('le client avec ID {int} consulte son solde', function (id: number) {
  // Vérifier si l'ID correspond à celui initialisé
  if (id !== accountId) {
    throw new Error("ID de compte non correspondant");
  }
  soldeAffiche = compteService.consulterSolde(id); // Passer l'ID du compte à la méthode
});

Then('le solde total affiché doit être de {int}€', function (soldeAttendu: number) {
  expect(soldeAffiche).to.equal(soldeAttendu);
});

Given('un compte client inconnu', function () {
  // Utiliser un ID de compte inexistant ou non initialisé
  const idInconnu = -1; // Vous devez initialiser idInconnu avec une valeur appropriée
  accountId = idInconnu; // Assurez-vous que accountId prend la valeur de idInconnu
});

When('le client tente de consulter le solde', function () {
  // Tenter de consulter le solde d'un compte inexistant
  try {
    soldeAffiche = compteService.consulterSolde(accountId);
  } catch (error) {
    this['error'] = error;
  }
});

Then('une erreur est signalée', function () {
  // Vérifier qu'une erreur a été signalée
  expect(this['error']).to.not.be.undefined;
});



