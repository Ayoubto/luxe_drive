import { Component,ViewChild  } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import {ClientService} from '../../../client.service'



@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css'],


})
export class ComptesComponent {
  Page_Titre="Gestion des Comptes"
  inputValue: string = ''

 






  constructor(private ClientService: ClientService) { }
  responseData: any[]=[];
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.ClientService.getSomeData().subscribe(
      (data) => {
        this.responseData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  Searsh() {
    if (this.inputValue === '') {
      this.ngOnInit();
    } else {
      this.responseData = this.responseData.filter(cli => {
        return this.checkProperties(cli, this.inputValue);
      });
    }
  }

  checkProperties(object: any, input: string): boolean {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        if (object[key] && object[key].toString().toLowerCase().includes(input.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  }

  onInputChange() {
   
    this.Searsh();
  }

  //Icons Font Awesome
  modifier = faPencil
  supprimer = faTrash
}
