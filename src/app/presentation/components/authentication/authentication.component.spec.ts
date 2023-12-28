import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from '../../../application/services/authentication.service';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let mockAuthenticationService: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    mockAuthenticationService = jasmine.createSpyObj('AuthenticationService', ['attemptLogin']);

    await TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [FormsModule],
      providers: [{ provide: AuthenticationService, useValue: mockAuthenticationService }]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authentication service on login', () => {
    component.username = 'testUser';
    component.password = 'testPass';
    component.login();
    expect(mockAuthenticationService.attemptLogin).toHaveBeenCalledWith('testUser', 'testPass');
  });

  // Ajoutez d'autres tests selon les besoins
  it('should update login success state on successful login', () => {
    mockAuthenticationService.attemptLogin.and.returnValue(true);
    component.username = 'user';
    component.password = 'pass';
    component.login();
    expect(component.loginSuccess).toBeTrue();
  });
});
