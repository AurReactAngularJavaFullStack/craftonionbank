import { Compte } from "./compte.model";

export class Client {
  constructor(
    public id: number,
    public nom: string,
    public comptes: Compte[]
  ) {}
}
