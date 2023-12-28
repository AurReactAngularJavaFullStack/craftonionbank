import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { CompteService } from '../../../application/services/compte.service';
import { of } from 'rxjs';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let mockCompteService: jasmine.SpyObj<CompteService>;

  beforeEach(async () => {
    mockCompteService = jasmine.createSpyObj('CompteService', ['getAllComptes']);

    await TestBed.configureTestingModule({
      declarations: [DashboardPage],
      providers: [{ provide: CompteService, useValue: mockCompteService }]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    mockCompteService.getAllComptes.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load comptes', () => {
    expect(mockCompteService.getAllComptes).toHaveBeenCalled();
  });

  // Ajouter d'autres tests, comme la vérification de l'affichage correct des comptes
});
