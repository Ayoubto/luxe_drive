import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8093';

  getMessages(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getallmessages`);
  }
  getMessageById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getmessage/${id}`);
  }
}
