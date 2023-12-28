import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionListComponent } from './transaction-list.component';
import { TransactionService } from '../../../application/services/transaction.service';
import { of } from 'rxjs';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;
  let mockTransactionService: jasmine.SpyObj<TransactionService>;

  beforeEach(async () => {
    mockTransactionService = jasmine.createSpyObj('TransactionService', ['getTransactions']);

    await TestBed.configureTestingModule({
      declarations: [TransactionListComponent],
      providers: [{ provide: TransactionService, useValue: mockTransactionService }]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    mockTransactionService.getTransactions.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load transactions', () => {
    expect(mockTransactionService.getTransactions).toHaveBeenCalled();
  });

  // Ajouter d'autres tests, comme la vérification de l'affichage correct des transactions
});
