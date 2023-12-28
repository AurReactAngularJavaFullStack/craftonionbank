import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompteRepository } from '../../infrastructure/persistence/compte.repository';
import { Compte } from '../../core/domain/compte.model';
import { ApiService } from '../../infrastructure/network/api.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private compteRepo: CompteRepository, private apiService: ApiService) {}

  getAllComptes(): Observable<Compte[]> {
    // Correctly return an Observable<Compte[]>
    return this.apiService.get<Compte[]>('/path/to/comptes/api');
  }
  
  getCompteDetails(id: number): Observable<Compte> {
    // Return an Observable<Compte> from the repository
    return this.compteRepo.getCompteById(id);
  }

  createCompte(compteDetails: any): Observable<Compte> {
    // Create a new instance of Compte and save it via the repository
    const newCompte = new Compte(compteDetails.id, compteDetails.balance);
    // Assume saveCompte returns an Observable<Compte>
    return this.compteRepo.saveCompte(newCompte);
  }

  // Add other methods to manipulate accounts as per use cases
}
