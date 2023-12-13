import { Component } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent {
  Page_Titre="Gestion des Comptes"

  //Icons Font Awesome
  modifier = faPencil
  supprimer = faTrash
}
