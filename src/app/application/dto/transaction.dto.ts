export class TransactionDTO {
  constructor(
    public id: number,
    public montant: number,
    public compteId: number
  ) {}
}
