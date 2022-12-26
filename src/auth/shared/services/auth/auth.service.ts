import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  createUser(email: string, password: string) {
    // Connect to Backend and Create USer on Database
  }

  loginUser(email: string, password: string) {
    //Connect to Backend and Login
  }
}
