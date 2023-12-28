import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PersonalDetailsManagementComponent } from '../personal-details-management/personal-details-mangement.component';
import { GestionDonneesPersonnellesService } from '../../../application/services/gestion-donnees-personnelle.service';

describe('PersonalDetailsManagementComponent', () => {
  let component: PersonalDetailsManagementComponent;
  let fixture: ComponentFixture<PersonalDetailsManagementComponent>;
  let mockService: jasmine.SpyObj<GestionDonneesPersonnellesService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('GestionDonneesPersonnellesService', ['mettreAJourEmail']);

    await TestBed.configureTestingModule({
      declarations: [PersonalDetailsManagementComponent],
      imports: [FormsModule],
      providers: [{ provide: GestionDonneesPersonnellesService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update email correctly', () => {
    component.email = 'new@example.com';
    component.updateEmail();
    expect(mockService.mettreAJourEmail).toHaveBeenCalledWith('new@example.com');
  });
});
