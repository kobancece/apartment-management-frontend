import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.loginUser(this.loginData).subscribe(response => {
      console.log('Login successful', response);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error('Login failed', error);
      this.errorMessage = 'Invalid email or password.';
    });
  }
}
