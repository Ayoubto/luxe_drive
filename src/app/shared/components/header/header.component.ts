import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LogoutService } from 'src/app/cote_admin/logout.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommunicationService } from 'src/app/communication.service';
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
  name:string=""
  helper = new JwtHelperService();
  nom:string="Et-toubi"
  prenom:string="Ayoub"
  haveImage:boolean=false
  profil = faUserCircle

  receiveData(data: boolean) {
    this.isLoggedIn = data; // Assign the received data from child to a variable in the parent
  }

  ngOnInit(){
    this.communicationService.submitEvent$.subscribe(() => {
      const token = localStorage.getItem('token'); // Replace 'token' with the key you use to store the token
      if(!!token){
        this.isLoggedIn=true
        const decodetoken= this.helper.decodeToken(token);
        this.name=decodetoken.nom +" "+ decodetoken.prenom
        this.nom=decodetoken.nom
        this.prenom= decodetoken.prenom
        this.fetchDataById(decodetoken.id)
      }
      
    });
    const token = localStorage.getItem('token'); // Replace 'token' with the key you use to store the token
    if(!!token){
      this.isLoggedIn=true
      const decodetoken= this.helper.decodeToken(token);
      this.name=decodetoken.nom +" "+ decodetoken.prenom
      this.nom=decodetoken.nom
      this.prenom= decodetoken.prenom
      
    }
  }
  responseData:any=""
  fetchDataById(id: number): void {
    this.AuthService.getDataById(id).subscribe(
      (data) => {
        this.responseData = data; 
        this.name=this.responseData.nom +" "+this.responseData.prenom
        this.nom=this.responseData.nom
        this.prenom=this.responseData.prenom

      },
      (error) => {
        console.error('Error fetching data:', error);
        this.responseData = {ERROR:""}; // Set formData as empty in case of an error
      
      }
    );
    console.log(this.responseData)
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  constructor(private logoutService: LogoutService,private communicationService: CommunicationService,private router: Router,private AuthService:AuthService) {}
  logout(): void{
    this.logoutService.deleteTokenFromLocalStorage();
    window.location.href = '/accueil';
  }



  changeProfile() {
    const token = localStorage.getItem('token'); 
    if(!token){
      return 
    }
    const decodetoken= this.helper.decodeToken(token);
    if(decodetoken.id){
      this.router.navigate(['../profil',decodetoken.id ]);
   
    }

    if(this.helper.isTokenExpired(token)){
      return false;
    }

    return false;
    
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