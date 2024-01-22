import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientService } from '../../../client.service';
import { faCheckCircle, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ReservationService } from 'src/app/services/reservation.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-pre-reservations',
  templateUrl: './pre-reservations.component.html',
  styleUrls: ['./pre-reservations.component.css']
})
export class PreReservationsComponent {
  Page_Titre="Gestion des Réservations"

  agences = [
    { value: '', label: 'Toutes les agences' },
    { value: 'tanger-ville', label: 'Agence de Tanger Ville (Siège)' },
    { value: 'tanger-aeroport', label: 'Agence de Tanger Aéroport' },
    { value: 'casablanca-ville', label: 'Agence de Casablanca Ville' },
    { value: 'casablanca-aeroport', label: 'Agence de Casablanca Aéroport' },
    { value: 'marrakech-ville', label: 'Agence de Marrakech Ville' },
    { value: 'marrakech-aeroport', label: 'Agence de Marrakech Aéroport' },
    { value: 'agadir-ville', label: 'Agence de Agadir Ville' },
    { value: 'agadir-aeroport', label: 'Agence de Agadir Aéroport' },
    { value: 'tetouan-ville', label: 'Agence de Tétouan Ville' },
  ];

  // constructor 
  constructor(private AuthService: AuthService,private ReservationService:ReservationService) { }
  
  // prend data en api (service)
  responseData: any[]=[];
  getData() {
    this.ReservationService.getAllreservation().subscribe(
      (data) => {
        this.responseData = data ;
       
        this.responseData = this.responseData.map((element, index) => ({ ...element, sequentialNumber: index + 1 ,id: element.id.toString() }));
        this.responseData.forEach(element => {

        });
        this.filteredData = [...this.responseData];
        this.dataSource.data=this.filteredData as PeriodicElement[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //Rechercher
  inputValue: string = ''
  Search() {
    if (this.inputValue === '') {
      this.dataSource.data = this.responseData; 
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

  //Filtrer les résultats
  selectedValue: string = ''; 
  filteredData: any[] = [];
  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    this.applyFilter();
  }
  applyFilter() {
    if (this.selectedValue === '') {
      this.dataSource.data = this.responseData as PeriodicElement[]; // Reset to original data if select value is empty
    } else {
      this.dataSource.data = this.responseData.filter(item => this.checkProperties(item, this.selectedValue)) as PeriodicElement[];
    }
  }

  //Trier
  @ViewChild(MatSort) sort!: MatSort;

  //Afficher les colonnes
  displayedColumns: string[] = ['id', 'client', 'tele', 'voiture','depart','retour','prix','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  //Pagination 
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.getData();  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onInputChange() {
    this.Search();
  }

  confirmer = faCheckCircle
  modifier = faPencil
  supprimer = faTrash
}
 
export interface PeriodicElement {
  id:string;
  client: string;
  tele: string;
  voiture:string;
  depart:string;
  retour:string;
  prix:string;
  actions:string
}