import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchProperties();
  }

  fetchProperties() {
    this.propertyService.getAllProperties().subscribe({
      next: (properties) => {
        this.properties = properties;
        console.log('Properties fetched successfully', properties);
      },
      error: (error) => {
        console.error('Error fetching properties', error);
      }
    });
  }

  viewPropertyDetails(propertyId: number) {
    this.router.navigate([`/dashboard/property/${propertyId}`]);
  }

  navigateToAddProperty() {
    this.router.navigate(['/dashboard/property/add']);
  }
}
