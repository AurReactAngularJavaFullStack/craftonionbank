import { GestionDonneesPersonnellesService } from "./gestion-donnees-personnelle.service";

describe('GestionDonneesPersonnellesService', () => {
  let service: GestionDonneesPersonnellesService;

  beforeEach(() => {
    service = new GestionDonneesPersonnellesService();
  });

  it('devrait permettre la mise à jour de l\'email', () => {
    service.setEmail('client@example.com');
    service.mettreAJourEmail('nouveau@example.com');
    expect(service.getEmail()).toEqual('nouveau@example.com');
  });
});
