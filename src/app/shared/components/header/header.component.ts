import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LogoutService } from 'src/app/cote_admin/logout.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  showDropdown = false;
  receivedDataa: string="";
  name:string="";

  profil = faUserCircle

  receiveData(data: boolean) {
    this.isLoggedIn = data; // Assign the received data from child to a variable in the parent
  }

  ngOnInit(){
    const token = localStorage.getItem('token'); // Replace 'token' with the key you use to store the token
    if(!!token){
      this.isLoggedIn=true
      this.getUserData();
     

    }
  }

  user:any;
  getUserData(): void {
    this.userService.getuserbyId()
      .then((data) => {
        this.user = data; 
        console.log('User data:', this.user); 
        this.firstName=this.user.prenom
        this.lastName=this.user.nom
      })
      .catch((error) => {
        console.error('Error occurred:', error); 
      });
  }

  firstName = ''; // Replace with user's first name
  lastName = ''; // Replace with user's last name

  getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  constructor(private logoutService: LogoutService,private userService:AuthService) {}
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
