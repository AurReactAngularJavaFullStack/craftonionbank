import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../application/services/authentication.service';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  username: string = '';
  password: string = '';
  loginSuccess: boolean | null = null;

  constructor(private authService: AuthenticationService) {}

  login(): void {
    this.loginSuccess = this.authService.attemptLogin(
      this.username,
      this.password
    );
  }
}
