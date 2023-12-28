import { CompteBancaireService } from "./compte-bancaire.service";

describe('CompteBancaireService', () => {
  let service: CompteBancaireService;

  beforeEach(() => {
    service = new CompteBancaireService();
  });

  it('devrait initialiser correctement le solde', () => {
    service.initialiserSolde(100);
    expect(service.consulterSolde()).toEqual(100);
  });

  it('devrait augmenter le solde lors d’un dépôt', () => {
    service.initialiserSolde(100);
    service.deposer(50);
    expect(service.consulterSolde()).toEqual(150);
  });

  it('devrait diminuer le solde lors d’un retrait', () => {
    service.initialiserSolde(100);
    service.retirer(50);
    expect(service.consulterSolde()).toEqual(50);
  });

  it('ne devrait pas permettre un retrait si les fonds sont insuffisants', () => {
    service.initialiserSolde(50);
    service.retirer(100);
    expect(service.consulterSolde()).toEqual(50); // Le solde reste inchangé
  });

});
