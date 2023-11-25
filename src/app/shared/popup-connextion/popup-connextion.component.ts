import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-connextion',
  templateUrl: './popup-connextion.component.html',
  styleUrls: ['./popup-connextion.component.css']
})
export class PopupConnextionComponent {
 
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closePopup() {

    this.close.emit();
  }

}
