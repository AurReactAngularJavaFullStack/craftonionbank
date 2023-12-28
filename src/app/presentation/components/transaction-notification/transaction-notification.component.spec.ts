import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionNotificationComponent } from './transaction-notification.component';
import { NotificationService } from '../../../application/services/notification.service';

describe('TransactionNotificationComponent', () => {
  let component: TransactionNotificationComponent;
  let fixture: ComponentFixture<TransactionNotificationComponent>;
  let mockService: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('NotificationService', ['derniereNotification']);
    mockService.derniereNotification.and.returnValue('Test notification');

    await TestBed.configureTestingModule({
      declarations: [TransactionNotificationComponent],
      providers: [{ provide: NotificationService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check notification correctly', () => {
    component.checkNotification();
    expect(component.notification).toEqual('Test notification');
    expect(mockService.derniereNotification).toHaveBeenCalled();
  });
});
