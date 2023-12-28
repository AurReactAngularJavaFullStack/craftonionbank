// Located at: src/app/application/steps/virementEntreComptes.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { VirementService } from '../../src/app/application/services/virement.service';

let virementService = new VirementService();
let soldeCompteA: number;
let soldeCompteB: number;

Given('le compte A avec un solde de {int}€', function (soldeA: number) {
  virementService.initialiserComptes({ compteA: soldeA, compteB: soldeCompteB });
  soldeCompteA = soldeA;
});

Given('le compte B avec un solde de {int}€', function (soldeB: number) {
  virementService.initialiserComptes({ compteA: soldeCompteA, compteB: soldeB });
  soldeCompteB = soldeB;
});

When('le client transfère {int}€ du compte A au compte B', function (montant: number) {
  let transferSuccess = virementService.effectuerVirement({
    deCompte: 'A',
    versCompte: 'B',
    montant: montant
  });
  expect(transferSuccess).to.be.true;
});

Then('le solde du compte A doit être {int}€', function (soldeAttenduA: number) {
  expect(virementService.obtenirSolde('A')).to.equal(soldeAttenduA);
});

Then('le solde du compte B doit être {int}€', function (soldeAttenduB: number) {
  expect(virementService.obtenirSolde('B')).to.equal(soldeAttenduB);
});

When('le client tente de transférer {int}€ du compte A au compte B', function (montant) {
  try {
    let transferSuccess = virementService.effectuerVirement({ deCompte: 'A', versCompte: 'B', montant });
    expect(transferSuccess).to.be.false; // Le virement doit échouer en cas de fonds insuffisants
  } catch (error) {
    this['error'] = error;
  }
});

Then('une erreur est signalée', function () {
  // Vérifier qu'une erreur a été signalée
  expect(this['error']).to.not.be.undefined;
});

