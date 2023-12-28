import { Injectable } from "@angular/core";
import { CompteBancaireService } from "../../application/services/compte-bancaire.service";

// consulterSolde.usecase.ts
@Injectable({
    providedIn: 'root'
  })
  export class ConsulterSoldeUsecase {
    constructor(private compteBancaireService: CompteBancaireService) {}
  
    execute(accountId: number): number {
      return this.compteBancaireService.getBalance(accountId);
    }
  }