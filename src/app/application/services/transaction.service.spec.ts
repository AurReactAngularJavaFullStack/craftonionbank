import { TransactionService } from "./transaction.service";

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    service = new TransactionService();
  });

  it('devrait effectuer une transaction et envoyer une notification', () => {
    service.effectuerTransaction(100);
    service.completerTransaction();
    expect(service.verifierNotification()).toBeTrue();
  });

  it('ne devrait pas envoyer de notification si la transaction n\'est pas complétée', () => {
    service.effectuerTransaction(100);
    // Ici on ne complète pas la transaction
    expect(service.verifierNotification()).toBeFalse();
  });

  it('devrait confirmer les fonds suffisants pour la transaction', () => {
    expect(service['verifierFonds'](500)).toBeTrue();
  });

  it('devrait indiquer des fonds insuffisants pour la transaction', () => {
    expect(service['verifierFonds'](1500)).toBeFalse();
  });
});
