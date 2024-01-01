import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  receivedDataa: string="";

  receiveData(data: boolean) {
    this.isLoggedIn = data; // Assign the received data from child to a variable in the parent
  }

  ngOnInit(){
    const token = localStorage.getItem('token'); // Replace 'token' with the key you use to store the token
    if(!!token){
      this.isLoggedIn=true
    }

  }

  isPopupOpen: boolean = false;
  isMenuOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopupins() {
    this.isPopupOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
