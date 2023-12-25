import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import {ClientService} from '../../../client.service'



@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css'],


})
export class ComptesComponent implements OnInit{
  Page_Titre="Gestion des Comptes"
  inputValue: string = ''

  displayedColumns: string[] = ['id', 'name', 'username', 'email','adress','phone','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private ClientService: ClientService) { }
  responseData: any[]=[];
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.ClientService.getSomeData().subscribe(
      (data) => {
        this.responseData = data ;
        this.dataSource.data=data as PeriodicElement[];
     
      },
      (error) => {
        console.error(error);
      }
    );
  }

  Search() {
    if (this.inputValue === '') {
      this.dataSource.data = this.responseData; // Reset to original data if search input is empty
    } else {
      this.dataSource.data = this.responseData.filter(cli => this.checkProperties(cli, this.inputValue));
    }
  }

  checkProperties(object: any, input: string): boolean {
    // Check if any property of the object contains the search input
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        if (object[key] && object[key].toString().toLowerCase().includes(input.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onInputChange() {
    this.Search();
  }

  //Icons Font Awesome
  modifier = faPencil
  supprimer = faTrash
}

export interface PeriodicElement {
  id:string;
  name: string;
  username: string;
   email:string;
  adress:string;
  phone:string;
  actions:string
   
}
