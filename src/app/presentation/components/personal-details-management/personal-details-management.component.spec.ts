import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDetailsManagementComponent } from './personal-details-mangement.component';
import { GestionDonneesPersonnellesService } from '../../../application/services/gestion-donnees-personnelle.service';

describe('PersonalDetailsMangementComponent', () => {
  let component: PersonalDetailsManagementComponent;
  let fixture: ComponentFixture<PersonalDetailsManagementComponent>;
  let mockService: jasmine.SpyObj<GestionDonneesPersonnellesService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('GestionDonneesPersonnellesService', ['mettreAJourEmail']);

    await TestBed.configureTestingModule({
      declarations: [PersonalDetailsManagementComponent],
      providers: [{ provide: GestionDonneesPersonnellesService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update email', () => {
    const email = 'test@example.com';
    component.email = email;
    component.updateEmail();
    expect(mockService.mettreAJourEmail).toHaveBeenCalledWith(email);
  });

  // Ajouter d'autres tests, comme la vérification de l'affichage des erreurs
});
