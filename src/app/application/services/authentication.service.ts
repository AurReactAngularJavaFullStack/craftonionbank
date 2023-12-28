import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;
  private validUsername!: string;
  private validPassword!: string;

  constructor() { }

  authenticate(username: string, password: string): void {
    // Simuler la vérification des informations d'identification
    this.isAuthenticated = (username === 'user' && password === 'pass');
  }

  getAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  configureCredentials(username: string, password: string): void {
    this.validUsername = username;
    this.validPassword = password;
  }

  attemptLogin(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }

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
