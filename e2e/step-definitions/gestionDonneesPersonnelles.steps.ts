import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { GestionDonneesPersonnellesService } from '../../src/app/application/services/gestion-donnees-personnelle.service';

let donneesPersonnellesService = new GestionDonneesPersonnellesService();
let emailActuel: string;

Given('un client avec l’adresse email "{string}"', function (email: string) {
  donneesPersonnellesService.setEmail(email);
  emailActuel = email;
});

When('le client change son adresse email en "{string}"', function (nouvelEmail: string) {
  try {
    donneesPersonnellesService.mettreAJourEmail(nouvelEmail);
    emailActuel = nouvelEmail;
  } catch (error) {
    this['error'] = error;
  }
});

Then('la nouvelle adresse email doit être "{string}"', function (emailAttendu: string) {
  expect(donneesPersonnellesService.getEmail()).to.equal(emailAttendu);
});

Then('un message erreur est affiché', function () {
  expect(this['error']).to.not.be.undefined;
});
