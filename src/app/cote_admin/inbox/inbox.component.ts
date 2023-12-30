import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faCheckSquare, faPencil, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  Page_Titre="Boîte de réception"

  responseData: PeriodicElement[] = [
    { 
      checkbox: false, 
      objet: 'Objet 1', 
      date: '25 dec',
    },
    { 
      checkbox: false, 
      objet: 'Objet 2', 
      date: '12 nov', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 3', 
      date: '10 nov', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 4', 
      date: '30 sept', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 4', 
      date: '08 août', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 5', 
      date: '05 août',  
    },
    { 
      checkbox: false, 
      objet: 'Objet 6', 
      date: '04 août', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 7', 
      date: '28 juil', 
    },
    { 
      checkbox: false, 
      objet: 'Objet 8', 
      date: '20 juil', 
    },
  ];

  masterCheckbox = false;

  // Method to handle the master checkbox state change
  toggleMasterCheckbox() {
    // Update the state of the master checkbox
    this.masterCheckbox = !this.masterCheckbox;

    // Update the state of all other checkboxes based on the master checkbox state
    this.responseData.forEach((element) => {
      element.checkbox = this.masterCheckbox;
    });
  }

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
  displayedColumns: string[] = ['checkbox', 'objet', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.responseData);

  // Pagination 
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onInputChange() {
    this.Search();
  }

  cocher = faCheckSquare;
  supprimer = faTrash;
  trier = faSort;
}

export interface PeriodicElement {
  checkbox: boolean;
  objet: string;
  date: string;
}
