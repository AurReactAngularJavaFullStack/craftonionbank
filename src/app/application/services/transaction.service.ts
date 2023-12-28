import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../../core/domain/transaction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private notificationSource = new BehaviorSubject<boolean>(false);
  private transactionEnCours: boolean = false;
  private fondsDisponibles: number = 1000;
  // Remplacez cette URL par votre endpoint API pour les transactions
  private apiUrl = 'https://api.votrebanque.com/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  effectuerTransaction(montant: number): void {
    // Simuler la vérification des fonds et le début de la transaction
    console.log(`Tentative de transaction de ${montant}€.`);

    // Simuler une vérification de fonds (dans la réalité, cela serait une requête HTTP)
    if (this.verifierFonds(montant)) {
      console.log('Fonds vérifiés, transaction en cours.');
      this.transactionEnCours = true;
      // Dans un cas réel, la requête serait envoyée ici et la transaction serait en attente jusqu'à la réponse
    } else {
      console.log('Fonds insuffisants pour la transaction.');
      this.transactionEnCours = false;
      // Échec de la transaction, on pourrait renvoyer une erreur ou mettre à jour l'état du service
    }
  }

  completerTransaction(): void {
    if (this.transactionEnCours) {
      console.log('Transaction complétée.');
      this.notificationSource.next(true); // Simuler l'envoi de la notification de la transaction réussie
    } else {
      console.log('Aucune transaction en cours à compléter.');
      this.notificationSource.next(false); // Aucune notification si la transaction n'est pas en cours
    }
  }

  verifierNotification(): boolean {
    return this.notificationSource.getValue();
  }

  // Méthode de simulation pour vérifier les fonds
  private verifierFonds(montant: number): boolean {
    // Logique pour vérifier si les fonds sont suffisants, dans la réalité cela ferait une vérification de backend
    return montant <= this.fondsDisponibles;
  }
}
