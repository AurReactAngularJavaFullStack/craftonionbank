import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompteFormComponent } from './compte-form.component';
import { CompteService } from '../../../application/services/compte.service';
import { Compte } from '../../../core/domain/compte.model';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CompteFormComponent', () => {
  let component: CompteFormComponent;
  let fixture: ComponentFixture<CompteFormComponent>;
  let mockCompteService: jasmine.SpyObj<CompteService>;

  beforeEach(async () => {
    mockCompteService = jasmine.createSpyObj('CompteService', ['createCompte']);

    await TestBed.configureTestingModule({
      declarations: [CompteFormComponent],
      imports: [FormsModule],
      providers: [{ provide: CompteService, useValue: mockCompteService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CompteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createCompte on submit', () => {
    component.compte = new Compte(1, 100);
    mockCompteService.createCompte.and.returnValue(of(new Compte(1, 100)));

    component.submitForm();
    expect(mockCompteService.createCompte).toHaveBeenCalledWith(component.compte);
  });

  // Ajouter d'autres tests, comme la gestion des erreurs lors de la création du compte
});
