import { Component } from '@angular/core';
import { faTachometerAlt, faUserCog, faBuilding, faCar, faCalendarAlt, faInbox, faRightFromBracket, faChevronRight, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  openSubMenus: string[] = [];

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
      // Submenu is already open, close it
      this.openSubMenus = this.openSubMenus.filter(item => item !== subMenu);
    } else {
      // Submenu is closed, open it
      this.openSubMenus.push(subMenu);
    }
  }
}
