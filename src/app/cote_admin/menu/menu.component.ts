import { Component } from '@angular/core';
import { faTachometerAlt, faUserCog, faBuilding, faCar, faCalendarAlt, faInbox, faRightFromBracket, faChevronRight, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  openSubMenus: string[] = [];

  constructor(private logoutService: LogoutService) {}
  onDeleteToken(): void {
    const tokenKey = 'token';
    this.logoutService.deleteTokenFromLocalStorage();
    window.location.href = '/accueil';
  }

  //Font Awesome icons
  dashboard = faTachometerAlt;
  comptes = faUserCog;
  agences = faBuilding;
  voitures = faCar;
  reservations = faCalendarAlt;
  inbox = faInbox;
  logout = faRightFromBracket;
  chevronRight = faChevronRight;
  chevronDown = faChevronDown;
  circle = faCircle;

  toggleSubMenu(subMenu: string): void {
    if (this.openSubMenus.includes(subMenu)) {
      this.openSubMenus = this.openSubMenus.filter(item => item !== subMenu);
    } else {
      this.openSubMenus.push(subMenu);
    }
  }
}
