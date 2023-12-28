import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../application/services/transaction.service';
import { Transaction } from '../../../core/domain/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      (error: any) => {
        console.error('Error loading transactions', error);
        this.transactions = [];
      }
    );
  }

  // Ajoutez d'autres méthodes si nécessaire
}
