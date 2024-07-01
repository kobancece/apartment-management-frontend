import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent {
  property = {
    propertyName: '',
    description: '',
    flatNumber: 0,
    size: 0,
    numberOfRooms: 0,
    numberOfBathrooms: 0,
    rent: 0,
    rentalStatus: '',
    numberOfBalconies: 0,
    internetStatus: '',
    infrastructure: ''
  };

  constructor(
    private propertyService: PropertyService,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  addProperty() {
    this.propertyService.addProperty(this.property).subscribe({
      next: (response) => {
        console.log('Property added successfully', response);
        const currentUserId = this.authService.getCurrentUserId(); // Get the current user's ID
        this.userService.addPropertyToUser(currentUserId, response.propertyId).subscribe({
          next: (userResponse) => {
            console.log('Property added to user successfully', userResponse);
            this.router.navigate(['/dashboard/property']);
          },
          error: (error) => {
            console.error('Error adding property to user', error);
          }
        });
      },
      error: (error) => {
        console.error('Error adding property', error);
      }
    });
  }

  getCurrentUserId(): number {
    // Implement logic to get the current user ID
    // This can be from a service that holds the authentication state
    return 1; // Placeholder for demonstration
  }
}
