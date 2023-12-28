// Located at: src/app/infrastructure/security/steps/securiteEtAuthentification.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { AuthenticationService } from '../../src/app/application/services/authentication.service';

let authService = new AuthenticationService();
let accesAutorise: boolean = false;

Given('que l’utilisateur a un identifiant "{string}" et un mot de passe "{string}"', function (id: string, mdp: string) {
  authService.configureCredentials(id, mdp);
});

When('l’utilisateur se connecte avec l’identifiant "{string}" et le mot de passe "{string}"', function (id: string, mdp: string) {
  accesAutorise = authService.attemptLogin(id, mdp);
});

Then('l’utilisateur obtient l’accès à son tableau de bord', function () {
  expect(accesAutorise).to.be.true;
});
