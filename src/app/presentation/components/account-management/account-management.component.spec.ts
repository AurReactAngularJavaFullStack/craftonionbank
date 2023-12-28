import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AccountManagementComponent } from './account-management.component';
import { CompteBancaireService } from '../../../application/services/compte-bancaire.service';

describe('AccountManagementComponent', () => {
  let component: AccountManagementComponent;
  let fixture: ComponentFixture<AccountManagementComponent>;
  let mockCompteBancaireService: jasmine.SpyObj<CompteBancaireService>;

  beforeEach(async () => {
    mockCompteBancaireService = jasmine.createSpyObj('CompteBancaireService', ['deposer', 'retirer', 'consulterSolde']);
    
    await TestBed.configureTestingModule({
      declarations: [AccountManagementComponent],
      imports: [FormsModule],
      providers: [{ provide: CompteBancaireService, useValue: mockCompteBancaireService }]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should deposit amount correctly', () => {
    const mockAccountId = 1; // Un exemple d'ID de compte
    component.montantDepot = 100;
    component.deposer(mockAccountId); // Ajoutez l'ID de compte en argument
    expect(mockCompteBancaireService.deposer).toHaveBeenCalledWith(mockAccountId, 100);
  });

  it('should withdraw amount correctly', () => {
    const mockAccountId = 1; // Un exemple d'ID de compte
    component.montantRetrait = 50;
    component.retirer(mockAccountId); // Ajoutez l'ID de compte en argument
    expect(mockCompteBancaireService.retirer).toHaveBeenCalledWith(mockAccountId, 50);
  });


  it('should deposit amount correctly', () => {
    const mockAccountId = 1; // ID de compte fictif pour le test
    component.montantDepot = 100;
    component.deposer(mockAccountId);
    expect(mockCompteBancaireService.deposer).toHaveBeenCalledWith(mockAccountId, 100);
  });
  
  it('should withdraw amount correctly', () => {
    const mockAccountId = 1; // ID de compte fictif pour le test
    component.montantRetrait = 50;
    component.retirer(mockAccountId);
    expect(mockCompteBancaireService.retirer).toHaveBeenCalledWith(mockAccountId, 50);
  });
  

  // Continuez à ajouter d'autres tests pour les différentes méthodes et scénarios.
  it('should display balance after consultation', () => {
    mockCompteBancaireService.consulterSolde.and.returnValue(100);
    component.consulterSolde();
    expect(component.solde).toEqual(100);
  });
});
