import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceInquiryComponent } from './balance-inquiry.component';
import { CompteBancaireService } from '../../../application/services/compte-bancaire.service';

describe('BalanceInquiryComponent', () => {
  let component: BalanceInquiryComponent;
  let fixture: ComponentFixture<BalanceInquiryComponent>;
  let mockCompteBancaireService: jasmine.SpyObj<CompteBancaireService>;

  beforeEach(async () => {
    mockCompteBancaireService = jasmine.createSpyObj('CompteBancaireService', ['consulterSolde']);
    mockCompteBancaireService.consulterSolde.and.returnValue(100); // Exemple de solde

    await TestBed.configureTestingModule({
      declarations: [BalanceInquiryComponent],
      providers: [{ provide: CompteBancaireService, useValue: mockCompteBancaireService }]
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display balance correctly', () => {
    component.consulterSolde();
    expect(component.solde).toEqual(100);
    expect(mockCompteBancaireService.consulterSolde).toHaveBeenCalled();
  });
});
