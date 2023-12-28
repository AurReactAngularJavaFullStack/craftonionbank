// Located at: src/app/infrastructure/network/steps/notificationDeTransactions.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { NotificationService } from '../../src/app/application/services/notification.service';

let notificationService = new NotificationService();
let notificationRecue: boolean = false;

Given('une transaction de {int}€ effectuée sur le compte du client', function (montant: number) {
  notificationService.realiserTransaction(montant);
});

When('la transaction est complétée', function () {
  notificationService.envoyerNotificationTransactionReussie();
  notificationRecue = notificationService.obtenirStatusNotification();
});

Then('le client reçoit une notification de la transaction', function () {
  expect(notificationRecue).to.be.true;
});
