import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080';

  getAllListing(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/listings`);
  }
}
