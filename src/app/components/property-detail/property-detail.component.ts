import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any = {};
  propertyEdit: any = {}; // Copy of the property for editing
  showUpdateForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {
    this.getPropertyDetails();
  }

  getPropertyDetails() {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      const parsedPropertyId = Number(propertyId);  // Parse propertyId to number
      this.propertyService.getPropertyById(parsedPropertyId).subscribe({
        next: (property) => {
          this.property = property;
          this.propertyEdit = { ...property }; // Make a copy of the property for editing
          console.log('Property details fetched successfully', property);
        },
        error: (error) => {
          console.error('Error fetching property details', error);
        }
      });
    } else {
      console.error('Property ID is null');
    }
  }

  showUpdateFormToggle() {
    this.showUpdateForm = true; // Show the update form when the button is clicked
  }

  updateProperty() {
    if (this.propertyEdit.propertyID) {
      this.propertyService.updateProperty(this.propertyEdit.propertyID, this.propertyEdit).subscribe({
        next: (response) => {
          console.log('Property updated successfully', response);
          this.property = { ...this.propertyEdit }; // Update the displayed property details
          this.showUpdateForm = false; // Hide the update form
          this.router.navigate(['/dashboard/property']);
        },
        error: (error) => {
          console.error('Error updating property', error);
        }
      });
    } else {
      console.error('Property ID is null');
    }
  }

  deleteProperty() {
    if (this.property.propertyID) {
      this.propertyService.deleteProperty(this.property.propertyID).subscribe({
        next: (response) => {
          console.log('Property deleted successfully', response);
          this.router.navigate(['/dashboard/property']);
        },
        error: (error) => {
          console.error('Error deleting property', error);
        }
      });
    } else {
      console.error('Property ID is null');
    }
  }
}
