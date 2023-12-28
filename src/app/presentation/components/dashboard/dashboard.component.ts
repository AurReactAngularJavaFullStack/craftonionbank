import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../../application/services/compte.service';
import { CompteViewModel } from '../../viewmodels/compte.viewmodel';
import { TransactionViewModel } from '../../viewmodels/transaction.viewmodel';
import { TransactionService } from '../../../application/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  compteVM: CompteViewModel;
  transactionVM: TransactionViewModel;

  constructor(private compteService: CompteService, private transactionService: TransactionService) {
    this.compteVM = new CompteViewModel(this.compteService);
    this.transactionVM = new TransactionViewModel(this.transactionService);
  }

  ngOnInit() {
    this.compteVM.loadCompteDetails(1); // Exemple : Charger les détails du compte avec ID 1
    this.transactionVM.loadTransactions(); // Charger toutes les transactions
  }
}
