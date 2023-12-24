import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ClientService} from '../../app/client.service'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

})

export class TestComponent implements OnInit{
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
  inputValue: string = ''

  Searsh() {
    if (this.inputValue === '') {
      this.dataSource.data = this.responseData; // Reset to original data if search input is empty
    } else {
      this.dataSource.data = this.responseData.filter(cli => this.checkProperties(cli, this.inputValue));
    }
  }

  // Function to check if any property of an object matches the search input
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

