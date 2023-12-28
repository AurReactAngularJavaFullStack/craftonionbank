import { NotificationService } from "./notification.service";

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
    // Configuration ou initialisation du service de notification.
  });

  it('devrait notifier le client lors d’une transaction', () => {
    service.realiserTransaction(100);
    expect(service.obtenirStatusNotification()).toBeTruthy();
  });

  it('devrait notifier le client après une transaction réussie', () => {
    service.envoyerNotificationTransactionReussie();
    expect(service.derniereNotification()).toEqual('Transaction réussie');
  });

  it('ne devrait pas notifier le client après une transaction échouée', () => {
    service.envoyerNotificationTransactionEchouee();
    expect(service.derniereNotification()).toEqual('Transaction échouée');
  });
});
