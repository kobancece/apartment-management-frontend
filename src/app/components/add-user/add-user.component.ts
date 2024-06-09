import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    password: '',
    roleType: ''
  };

  successMessage: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  addUser() {
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        this.successMessage = 'User added successfully!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error creating user', error);
      }
    });
  }
}
