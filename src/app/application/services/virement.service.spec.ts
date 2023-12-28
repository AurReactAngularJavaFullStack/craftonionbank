import { VirementService } from "./virement.service";

describe('VirementService', () => {
  let service: VirementService;

  beforeEach(() => {
    service = new VirementService();
  });

  it('devrait correctement initialiser les comptes', () => {
    service.initialiserComptes({ compteA: 300, compteB: 100 });
    expect(service.obtenirSolde('A')).toEqual(300);
    expect(service.obtenirSolde('B')).toEqual(100);
  });

  it('devrait permettre un virement du compte A au compte B', () => {
    service.initialiserComptes({ compteA: 300, compteB: 100 });
    service.effectuerVirement({ deCompte: 'A', versCompte: 'B', montant: 50 });
    expect(service.obtenirSolde('A')).toEqual(250);
    expect(service.obtenirSolde('B')).toEqual(150);
  });

  it('ne devrait pas effectuer un virement si les fonds sont insuffisants', () => {
    service.initialiserComptes({ compteA: 100, compteB: 100 });
    expect(service.effectuerVirement({ deCompte: 'A', versCompte: 'B', montant: 150 })).toBeFalsy();
    expect(service.obtenirSolde('A')).toEqual(100); // Le solde ne change pas
    expect(service.obtenirSolde('B')).toEqual(100); // Le solde ne change pas
  });

  // D'autres tests pour couvrir des cas d'erreur ou des validations spécifiques.
});
