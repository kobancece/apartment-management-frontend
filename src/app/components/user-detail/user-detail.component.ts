import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any = {};
  userEdit: any = {}; // Copy of the user for editing
  showUpdateForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const parsedUserId = Number(userId);  // Parse userId to number
      this.userService.getUserById(parsedUserId).subscribe({
        next: (user) => {
          this.user = user;
          this.userEdit = { ...user }; // Make a copy of the user for editing
          console.log('User details fetched successfully', user);
        },
        error: (error) => {
          console.error('Error fetching user details', error);
        }
      });
    } else {
      console.error('User ID is null');
    }
  }

  showUpdateFormToggle() {
    this.showUpdateForm = true; // Show the update form when the button is clicked
  }

  updateUser() {
    if (this.userEdit.id) {
      this.userService.updateUser(this.userEdit.id, this.userEdit).subscribe({
        next: (response) => {
          console.log('User updated successfully', response);
          this.user = { ...this.userEdit }; // Update the displayed user details
          this.showUpdateForm = false; // Hide the update form
          this.router.navigate(['/dashboard/user']);
        },
        error: (error) => {
          console.error('Error updating user', error);
        }
      });
    } else {
      console.error('User ID is null');
    }
  }

  deleteUser() {
    if (this.user.id) {
      this.userService.deleteUser(this.user.id).subscribe({
        next: (response) => {
          console.log('User deleted successfully', response);
          this.router.navigate(['/dashboard/user']);
        },
        error: (error) => {
          console.error('Error deleting user', error);
        }
      });
    } else {
      console.error('User ID is null');
    }
  }
}
