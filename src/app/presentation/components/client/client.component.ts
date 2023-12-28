import { Component, OnInit } from '@angular/core';
import { Client } from '../../../core/domain/client.model';
import { ClientService } from '../../../application/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client: Client | null = null;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClientDetails(1) // Exemple : Charger les détails du client avec ID 1
      .subscribe(client => {
        this.client = client;
      }, error => {
        console.error('Error fetching client details', error);
        // Gérer l'erreur ici
      });
  }
}
