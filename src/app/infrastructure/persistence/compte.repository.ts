import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../../core/domain/compte.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteRepository {
  private apiUrl = 'https://api.votrebanque.com/comptes';

  constructor(private http: HttpClient) {}

  getCompteById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiUrl}/${id}`);
  }

  saveCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.apiUrl, compte);
  }

  // Ajouter d'autres méthodes nécessaires pour la persistance des données de compte.
}
