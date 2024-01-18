import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator ,MatPaginatorIntl,MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AgenceService } from 'src/app/services/agence.service';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent {
  Page_Titre = "Gestion des Agences";

  constructor(private AgenceService:AgenceService){}
  // Manually created data
  responseData: any[]=[];
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

    this.getUsersData()
  }

  getUsersData() {
    this.AgenceService.getAllAgence().subscribe(
      (data) => {
        console.log(data)
        this.responseData = data ;
        this.responseData = this.responseData.map((element, index) => ({ ...element, sequentialNumber: index + 1 ,id: element.id.toString() }));
        this.filteredData = [...this.responseData];
        this.dataSource.data=this.filteredData as PeriodicElement[];
      },
      (error) => {
        console.error(error);
        console.log("Hello word")
      }
    );
  }
  onInputChange() {
    this.Search();
  }
  
  // code pour pagination
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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