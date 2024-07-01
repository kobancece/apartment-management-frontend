import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  private currentUserId: number = 1; // Replace 'any' with your user type

  constructor() {
    // Initialize currentUser somehow, possibly from localStorage or an API call
  }

  // Example method to set the current user
  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  // Example method to get the current user
  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserId(): number {
    // Logic to get the current logged-in user's ID
    // This might involve reading from a JWT token, session storage, etc.
    return this.currentUserId;
  }
}
