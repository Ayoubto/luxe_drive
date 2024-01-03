import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LogoutService } from 'src/app/cote_admin/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  showDropdown = false;
  receivedDataa: string="";

  profil = faUserCircle

  receiveData(data: boolean) {
    this.isLoggedIn = data; // Assign the received data from child to a variable in the parent
  }

  ngOnInit(){
    const token = localStorage.getItem('token'); // Replace 'token' with the key you use to store the token
    if(!!token){
      this.isLoggedIn=true
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  constructor(private logoutService: LogoutService) {}
  logout(): void{
    this.logoutService.deleteTokenFromLocalStorage();
    window.location.href = '/accueil';
  }

  changeProfile() {
    window.location.href = '/profil';
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
