import { TransactionService } from "../../application/services/transaction.service";
import { Transaction } from "../../core/domain/transaction.model";

export class TransactionViewModel {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error loading transactions', error);
        this.transactions = [];
      }
    );
  }

  // Ajoutez d'autres méthodes selon les besoins
}
