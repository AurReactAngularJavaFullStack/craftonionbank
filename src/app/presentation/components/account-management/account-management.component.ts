import { Component } from '@angular/core';
import { CompteBancaireService } from '../../../application/services/compte-bancaire.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'account-management',
  templateUrl: './account-management.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent {
  accountId: number; // Add an accountId property
  montantDepot: number | null = null;
  montantRetrait: number | null = null;
  solde: number | null = null;

  constructor(private compteService: CompteBancaireService) {
    this.accountId = 1; // Initialize with a valid accountId, or set it dynamically as needed
  }

  consulterSolde(): void {
    this.solde = this.compteService.consulterSolde(this.accountId);
  }

  deposer(accountId: number): void {
    if (typeof this.montantDepot === 'number') {
      this.compteService.deposer(accountId, this.montantDepot);
      this.montantDepot = null;
    }
  }
  
  retirer(accountId: number): void {
    if (typeof this.montantRetrait === 'number') {
      this.compteService.retirer(accountId, this.montantRetrait);
      this.montantRetrait = null;
    }
  }
  
}
