import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/apartment/property';

  constructor(private http: HttpClient) { }

  addProperty(property: any): Observable<any> {
    return this.http.post(this.apiUrl, property);
  }

  getAllProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPropertyById(propertyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${propertyId}`);
  }

  updateProperty(propertyId: number, property: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${propertyId}/update`, property);
  }

  deleteProperty(propertyId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${propertyId}/delete`);
  }
}
