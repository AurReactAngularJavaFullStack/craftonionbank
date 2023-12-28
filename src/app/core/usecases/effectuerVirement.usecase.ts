// effectuerVirement.usecase.ts
import { Injectable } from '@angular/core';
import { CompteBancaireService } from '../../application/services/compte-bancaire.service';

@Injectable({
  providedIn: 'root'
})
export class EffectuerVirementUsecase {
  constructor(private compteBancaireService: CompteBancaireService) {}

  execute(fromId: number, toId: number, amount: number): boolean {
    return this.compteBancaireService.transfer(fromId, toId, amount);
  }
}


