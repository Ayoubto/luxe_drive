import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-inscription',
  templateUrl: './popup-inscription.component.html',
  styleUrls: ['./popup-inscription.component.css']
})
export class PopupInscriptionComponent {


  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
