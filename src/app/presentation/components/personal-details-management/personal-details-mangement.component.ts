import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionDonneesPersonnellesService } from '../../../application/services/gestion-donnees-personnelle.service';

@Component({
  selector: 'personal-details-management',
  templateUrl: './personal-details-management.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./personal-details-management.component.scss']
})
export class PersonalDetailsManagementComponent {
  email: string = '';

  constructor(private gestionDonneesService: GestionDonneesPersonnellesService) {}

  updateEmail(): void {
    this.gestionDonneesService.mettreAJourEmail(this.email);
  }
}
