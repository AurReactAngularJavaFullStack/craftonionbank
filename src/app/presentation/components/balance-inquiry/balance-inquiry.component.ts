import { Component } from '@angular/core';
import { CompteBancaireService } from '../../../application/services/compte-bancaire.service';

@Component({
  selector: 'balance-inquiry',
  templateUrl: './balance-inquiry.component.html',
  styleUrls: ['./balance-inquiry.component.scss'],
})
export class BalanceInquiryComponent {
  accountId: number; // Add an accountId property
  solde: number | null = null;

  constructor(private compteService: CompteBancaireService) {
    this.accountId = 1; // Initialize with a valid accountId, or set it dynamically as needed
  }

  consulterSolde(): void {
    this.solde = this.compteService.consulterSolde(this.accountId);
  }
}
