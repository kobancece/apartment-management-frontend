import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/apartment/user';

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId: number, user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userId}/update`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}/delete`);
  }

  loginUser(loginData: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}
