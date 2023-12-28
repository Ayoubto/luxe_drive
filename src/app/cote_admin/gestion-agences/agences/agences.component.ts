import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent {
  Page_Titre = "Gestion des Agences";

  // Manually created data
  responseData: PeriodicElement[] = [
    { 
      id: '1', 
      nom: 'Agence de Tanger Ville (Siège)', 
      adresse: '36, Avenue Mohamed V, Tanger, Maroc.', 
      tele: '(+212) 5 39 39 39 30', 
      email: 'tangerv@luxedrive.ma', 
      manager: 'Manager 1', 
      actions: '' 
    },
    { 
      id: '2', 
      nom: 'Agence de Tanger Aéroport', 
      adresse: 'Aéroport Tanger Ibn Battouta, Tanger, Maroc.', 
      tele: '(+212) 5 39 39 39 31', 
      email: 'tangera@luxedrive.ma', 
      manager: 'Manager 2', 
      actions: '' 
    },
    { 
      id: '3', 
      nom: 'Agence de Casablanca Ville', 
      adresse: '25, Rue Oraibi Jilali, Casablanca, Maroc.', 
      tele: '(+212) 5 39 39 39 32', 
      email: 'casablancav@luxedrive.ma', 
      manager: 'Manager 3', 
      actions: '' 
    },
    { 
      id: '4', 
      nom: 'Agence de Casablanca Aéroport', 
      adresse: 'Aéroport Casablanca Mohamed V, Casablanca, Maroc.', 
      tele: '(+212) 5 39 39 39 33', 
      email: 'casablancaa@luxedrive.ma', 
      manager: 'Manager 4', 
      actions: '' 
    },
    { 
      id: '5', 
      nom: 'Agence de Marrakech Ville', 
      adresse: '154, Bd Mohamed V, Marrakech, Maroc.', 
      tele: '(+212) 5 39 39 39 34', 
      email: 'marrakechv@luxedrive.ma', 
      manager: 'Manager 5', 
      actions: '' 
    },
    { 
      id: '6', 
      nom: 'Agence de Marrakech Aéroport', 
      adresse: 'Aéroport Marrakech Menara, Marrakech, Maroc.', 
      tele: '(+212) 5 39 39 39 35', 
      email: 'marrakecha@luxedrive.ma', 
      manager: 'Manager 6', 
      actions: '' 
    },
    { 
      id: '7', 
      nom: 'Agence de Agadir Ville', 
      adresse: 'Avenue Mohamed V Bungalow Marhaba, Agadir, Maroc.', 
      tele: '(+212) 5 39 39 39 36', 
      email: 'agadirv@luxedrive.ma', 
      manager: 'Manager 7', 
      actions: '' 
    },
    { 
      id: '8', 
      nom: 'Agence de Agadir Aéroport', 
      adresse: 'Aéroport Agadir Al Massira, Agadir, Maroc.', 
      tele: '(+212) 5 39 39 39 37', 
      email: 'agadira@luxedrive.ma', 
      manager: 'Manager 8', 
      actions: '' 
    },
    { 
      id: '9', 
      nom: 'Agence de Tétouan Ville', 
      adresse: '20, Avenue Ahmed ghanmia, Tétouan, Maroc.', 
      tele: '(+212) 5 39 39 39 38', 
      email: 'tetouanv@luxedrive.ma', 
      manager: 'Manager 9', 
      actions: '' 
    },
  ];

  // Rechercher
  inputValue: string = '';
  Search() {
    if (this.inputValue === '') {
      this.dataSource.data = this.responseData;
    } else {
      this.dataSource.data = this.responseData.filter(cli => this.checkProperties(cli, this.inputValue));
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

  // Filtrer les résultats
  selectedValue: string = '';
  filteredData: any[] = [];

  // Trier
  @ViewChild(MatSort) sort!: MatSort;

  // Afficher les colonnes
  displayedColumns: string[] = ['id', 'nom', 'adresse', 'tele', 'email', 'manager', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.responseData);

  // Pagination 
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onInputChange() {
    this.Search();
  }

  modifier = faPencil;
  supprimer = faTrash;
}

export interface PeriodicElement {
  id: string;
  nom: string;
  adresse: string;
  tele: string;
  email: string;
  manager: string;
  actions: string;
}