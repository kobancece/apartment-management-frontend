import { Component } from '@angular/core';
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
    flatList: [] as string[],
    roleType: ''
  };

  flatListInput = '';
  users: any[] = [];

  constructor(private userService: UserService) { }

  onSubmit() {
    this.user.flatList = this.flatListInput.split(',').map(flat => flat.trim());
    this.userService.createUser(this.user).subscribe(response => {
      console.log('User created successfully', response);
    }, error => {
      console.error('Error creating user', error);
    });
  }

  fetchAllUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log('Users fetched successfully', users);
    }, error => {
      console.error('Error fetching users', error);
    });
  }
}
