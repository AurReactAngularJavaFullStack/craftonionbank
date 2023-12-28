import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): void {
    // Logique pour vérifier les identifiants et authentifier l'utilisateur
    this.isAuthenticated = (username === 'expectedUsername' && password === 'expectedPassword');
  }

  logout(): void {
    // Logique pour déconnecter l'utilisateur
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
