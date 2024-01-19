import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8093';

  getAllAVoiture(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getallvoitures`);
  }

  Addvoiture(newAgence: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addvoiture`,newAgence);
  }
}
