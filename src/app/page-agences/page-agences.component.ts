import { Component} from '@angular/core';

@Component({
  selector: 'app-page-agences',
  templateUrl: './page-agences.component.html',
  styleUrls: ['./page-agences.component.css']
})
export class PageAgencesComponent {
  showDetailsLeft: boolean = false;
  showDetailsCenter: boolean = false;
  showDetailsRight: boolean = false;

  showDetailsLeft2: boolean = false;
  showDetailsCenter2: boolean = false;
  showDetailsRight2: boolean = false;

  showDetailsLeft3: boolean = false;
  showDetailsCenter3: boolean = false;
  showDetailsRight3: boolean = false;


  toggleDetailsLeft() {
    this.showDetailsLeft = !this.showDetailsLeft;
  }

  toggleDetailsCenter() {
    this.showDetailsCenter = !this.showDetailsCenter;
  }

  toggleDetailsRight() {
    this.showDetailsRight = !this.showDetailsRight;
  }

  toggleDetailsLeft2() {
    this.showDetailsLeft2 = !this.showDetailsLeft2;
  }

  toggleDetailsCenter2() {
    this.showDetailsCenter2 = !this.showDetailsCenter2;
  }

  toggleDetailsRight2() {
    this.showDetailsRight2 = !this.showDetailsRight2;
  }
  toggleDetailsLeft3() {
    this.showDetailsLeft3 = !this.showDetailsLeft3;
  }

  toggleDetailsCenter3() {
    this.showDetailsCenter3 = !this.showDetailsCenter3;
  }

  toggleDetailsRight3() {
    this.showDetailsRight3 = !this.showDetailsRight3;
  }

}
