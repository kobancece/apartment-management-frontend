import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';

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
    private router: Router
  ) { }

  addProperty() {
    this.propertyService.addProperty(this.property).subscribe({
      next: (response) => {
        console.log('Property added successfully', response);
        this.router.navigate(['/dashboard/property']);
      },
      error: (error) => {
        console.error('Error adding property', error);
      }
    });
  }
}
