import { Component } from '@angular/core';
import { CompteService } from '../../../application/services/compte.service';
import { Compte } from '../../../core/domain/compte.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./compte-form.component.scss']
})
export class CompteFormComponent {
  compte: Compte = new Compte(0, 0);

  constructor(private compteService: CompteService) {}

  submitForm(): void {
    // Logique pour soumettre le formulaire de compte
    this.compteService.createCompte(this.compte).subscribe(
      (compteCree: Compte) => {
        console.log('Compte créé avec succès', compteCree);
        // Vous pouvez ajouter une redirection ou un message de succès ici
      },
      (error) => {
        console.error('Erreur lors de la création du compte', error);
        // Gérer l'erreur ici
      }
    );
  }

  // Ajoutez d'autres méthodes si nécessaire
}
