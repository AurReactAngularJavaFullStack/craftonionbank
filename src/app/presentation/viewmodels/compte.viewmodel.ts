import { CompteService } from "../../application/services/compte.service";
import { Compte } from "../../core/domain/compte.model";

export class CompteViewModel {
  compte: Compte | null = null;

  constructor(private compteService: CompteService) {}

  loadCompteDetails(accountId: number): void {
    this.compteService.getCompteDetails(accountId).subscribe(
      (data: Compte) => {
        this.compte = data;
      },
      (error) => {
        console.error('Error loading compte details', error);
        this.compte = null;
      }
    );
  }

  // Ajoutez d'autres méthodes selon les besoins
}
