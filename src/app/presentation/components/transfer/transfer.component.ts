import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VirementService } from '../../../application/services/virement.service';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  montant: number = 0;
  fromAccount: string = '';
  toAccount: string = '';

  constructor(private virementService: VirementService) {}

  effectuerVirement(): void {
    const success = this.virementService.effectuerVirement({
      deCompte: this.fromAccount,
      versCompte: this.toAccount,
      montant: this.montant,
    });
    if (success) {
      alert('Virement réussi');
    } else {
      alert('Virement échoué');
    }
  }
}
