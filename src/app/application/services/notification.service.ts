import { Injectable } from '@angular/core';
/*In this service class:
A private lastNotification property is 
used to store the message of the last 
notification.
The realiserTransaction method sets 
the lastNotification based on a 
condition, which for this example is 
just checking if the transaction amount
is positive.
The envoyerNotificationTransactionReussie 
method sets the lastNotification to a 
success message.
The envoyerNotificationTransactionEchouee 
method sets the lastNotification to a 
failure message.
The derniereNotification method returns
the last notification message.
The obtenirStatusNotification method 
returns a boolean indicating the 
success status of the last transaction, 
based on the last notification message.
This implementation should satisfy 
the test cases you provided. 
Remember to adapt this service to fit 
the actual logic and requirements of 
your application, such as integrating 
with a real transaction handling system
and sending notifications accordingly.*/
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private lastNotification: string = '';

  constructor() { }

  realiserTransaction(montant: number): void {
    // Here you would typically handle the transaction
    // For this example, we will just assume the transaction is successful
    this.lastNotification = montant > 0 ? 'Transaction réussie' : 'Transaction échouée';
  }

  envoyerNotificationTransactionReussie(): void {
    this.lastNotification = 'Transaction réussie';
  }

  envoyerNotificationTransactionEchouee(): void {
    this.lastNotification = 'Transaction échouée';
  }

  derniereNotification(): string {
    return this.lastNotification;
  }

  obtenirStatusNotification(): boolean {
    // This method should return a boolean status, which could be based on some condition
    // For this example, let's assume it returns true if the last message is 'Transaction réussie'
    return this.lastNotification === 'Transaction réussie';
  }
}
