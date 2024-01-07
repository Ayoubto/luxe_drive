// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthServicee: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.AuthServicee.isAdmin()) {
      return true; // Allow access if user has admin role
    } else {
      this.router.navigate(['/voitures']); // Redirect to unauthorized page or handle accordingly
      return false;
    }
  }
}
