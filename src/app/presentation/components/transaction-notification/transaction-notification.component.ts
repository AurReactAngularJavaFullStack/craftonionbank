import { Component } from '@angular/core';
import { NotificationService } from '../../../application/services/notification.service';

@Component({
  selector: 'transaction-notification',
  templateUrl: './transaction-notification.component.html',
  styleUrls: ['./transaction-notification.component.scss'],
})
export class TransactionNotificationComponent {
  notification: string = '';

  constructor(private notificationService: NotificationService) {}

  checkNotification(): void {
    this.notification = this.notificationService.derniereNotification();
  }
}
