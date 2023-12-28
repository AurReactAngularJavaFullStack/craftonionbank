import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/domain/client.model';


@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private http: HttpClient) {}

  getClientDetails(clientId: number): Observable<Client> {
    return this.http.get<Client>(`api/clients/${clientId}`);
  }
}
