import { Injectable } from '@angular/core';
/*In this service class:

A private email property is used to store 
the user's email address.
The setEmail method sets the initial email 
address.
The mettreAJourEmail method updates the 
email address to a new value.
The getEmail method retrieves the current 
email address.
This service will now pass the test 
specified in gestion-donnees-personnelles
.service.spec.ts as it includes the methods
that are called by the test. Remember, in a 
real-world application, you would also need 
to add error handling and validation 
(e.g., to check if the email format is 
  correct before setting or updating it).*/
@Injectable({
  providedIn: 'root'
})
export class GestionDonneesPersonnellesService {
  private email: string = '';

  constructor() { }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  mettreAJourEmail(newEmail: string): void {
    // Here you could include additional logic such as validation of the email format
    this.email = newEmail;
  }

  getEmail(): string {
    return this.email;
  }
}

