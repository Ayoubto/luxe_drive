import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private submitSubject = new Subject<void>();

  submitEvent$ = this.submitSubject.asObservable();

  triggerSubmitEvent() {
    this.submitSubject.next();
  }
}
