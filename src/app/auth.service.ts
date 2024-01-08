import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole: string = 'user'; 
  private currentUser: any;
  helper = new JwtHelperService();



  isAdmin(): boolean {
    const token = localStorage.getItem('token'); 
    if(!token){
      return false;
    }
    const decodetoken= this.helper.decodeToken(token);
    if(decodetoken.role="admin"){
      return true;
    }

    if(this.helper.isTokenExpired(token)){
      return false;
    }

    return false;
    
  }
  private apiUrl = 'http://localhost:8093/api';
  private authToken: string | null = null;

  setAuthToken(token: string | null): void {
    this.authToken = token;
  }





  
  constructor(private http: HttpClient) { }


  registerUser(userData: any): Observable<any> {
    if (!this.authToken) {
      // Handle error or redirect to login
      // Example: throw new Error('Token not available');
      console.log("noooo")
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/auth/signup`,userData, { headers });
  }
   
  

  authenticateUser(credentials: any): Observable<any> {
    if (!this.authToken) {
      // Handle error or redirect to login
      // Example: throw new Error('Token not available');
      console.log("noooo")
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/auth/signin`, credentials ,{ headers });
  }

}
