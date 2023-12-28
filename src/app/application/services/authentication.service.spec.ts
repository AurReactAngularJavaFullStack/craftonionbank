import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    service = new AuthenticationService();
  });

  it('should authenticate a user with valid credentials', () => {
    const validUsername = 'user123';
    const validPassword = 'password123';
    service.configureCredentials(validUsername, validPassword);
    expect(service.attemptLogin(validUsername, validPassword)).toBeTrue();
    expect(service.checkAuthentication()).toBeTrue();
  });

  it('should not authenticate a user with invalid credentials', () => {
    const validUsername = 'user123';
    const validPassword = 'password123';
    const invalidPassword = 'wrongpassword';
    service.configureCredentials(validUsername, validPassword);
    expect(service.attemptLogin(validUsername, invalidPassword)).toBeFalse();
    expect(service.checkAuthentication()).toBeFalse();
  });
});
