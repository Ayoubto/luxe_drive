import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faCheckSquare, faPencil, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';
import { InboxService } from 'src/app/services/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  Page_Titre="Boîte de réception"

  message: any
  idMessage: any
  content: any

  Va:boolean=false

  constructor(private InboxService:InboxService) {}

  getMessages() {
    this.InboxService.getMessages().subscribe(
      (data) => {
        console.log(data)
        this.responseData = data ;
        this.filteredData = [...this.responseData];
        this.dataSource.data=this.filteredData as PeriodicElement[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getMessage() {
    this.InboxService.getMessageById(this.idMessage).subscribe(
      (data) => {
        this.content = data
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  displayContent(id: any){
    this.idMessage = id
    this.getMessage();
    
    this.Va = !this.Va
  }

  responseData: PeriodicElement[] = [];


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
    this.getMessages();
    this.getMessage();

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
