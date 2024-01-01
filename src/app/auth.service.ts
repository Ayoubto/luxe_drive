import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
