import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TransferComponent } from './transfer.component';
import { VirementService } from '../../../application/services/virement.service';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;
  let mockVirementService: jasmine.SpyObj<VirementService>;

  beforeEach(async () => {
    mockVirementService = jasmine.createSpyObj('VirementService', ['effectuerVirement']);

    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [FormsModule],
      providers: [{ provide: VirementService, useValue: mockVirementService }]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform transfer successfully', () => {
    component.fromAccount = 'A';
    component.toAccount = 'B';
    component.montant = 100;
    mockVirementService.effectuerVirement.and.returnValue(true);

    component.effectuerVirement();
    expect(mockVirementService.effectuerVirement).toHaveBeenCalledWith({
      deCompte: 'A',
      versCompte: 'B',
      montant: 100
    });
    // Testez la logique de gestion des alertes ou des messages ici.
  });

  it('should handle transfer failure', () => {
    component.fromAccount = 'A';
    component.toAccount = 'B';
    component.montant = 100;
    mockVirementService.effectuerVirement.and.returnValue(false);

    component.effectuerVirement();
    expect(mockVirementService.effectuerVirement).toHaveBeenCalledWith({
      deCompte: 'A',
      versCompte: 'B',
      montant: 100
    });
    // Testez le comportement en cas d'échec du virement.
  });
});
