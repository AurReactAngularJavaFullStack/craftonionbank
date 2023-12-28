import { Routes } from '@angular/router';
import { AccountManagementComponent } from './presentation/components/account-management/account-management.component';
import { BalanceInquiryComponent } from './presentation/components/balance-inquiry/balance-inquiry.component';
import { AuthenticationComponent } from './presentation/components/authentication/authentication.component';
import { TransactionNotificationComponent } from './presentation/components/transaction-notification/transaction-notification.component';
import { TransferComponent } from './presentation/components/transfer/transfer.component';
import { PersonalDetailsManagementComponent } from './presentation/components/personal-details-management/personal-details-mangement.component';
import { TransactionListComponent } from './presentation/components/transaction-list/transaction-list.component';
import { CompteFormComponent } from './presentation/components/compte-form/compte-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/account-management', pathMatch: 'full' },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'balance-inquiry', component: BalanceInquiryComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'personal-details', component: PersonalDetailsManagementComponent },
  { path: 'transaction-notification', component: TransactionNotificationComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'transaction-list', component: TransactionListComponent },
  { path: 'compte-form', component: CompteFormComponent },
  // Ajoutez d'autres routes selon les besoins
];
