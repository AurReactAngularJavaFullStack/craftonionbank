import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { CompteDTO } from '../../application/dto/compte.dto';
import { TransactionDTO } from '../../application/dto/transaction.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

   // Ensure this method returns Observable<T>
   get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  createCompte(compteData: CompteDTO): Observable<CompteDTO> {
    return this.http.post<CompteDTO>('api/comptes', compteData);
  }

  createTransaction(transactionData: TransactionDTO): Observable<TransactionDTO> {
    return this.http.post<TransactionDTO>('api/transactions', transactionData);
  }

  // Méthode pour faire un appel GET à une API externe
  // async get<T>(url: string): Promise<T> {
  //   const response$ = this.http.get<T>(url);
  //   const response = await lastValueFrom(response$);
  //   if (response === undefined || response === null) {
  //     throw new Error('No data returned from the API');
  //   }
  //   return response;
  // }

  // async post<T>(url: string, data: any): Promise<T> {
  //   const response$ = this.http.post<T>(url, data);
  //   return await lastValueFrom(response$);
  // }

  // Ajouter des méthodes pour PUT, DELETE, etc., selon les besoins de l'application.
}
