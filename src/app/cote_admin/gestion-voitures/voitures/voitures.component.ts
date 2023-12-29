import {AfterViewInit, Component, ViewEncapsulation ,ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorIntl , MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css'],
  encapsulation: ViewEncapsulation.None // Set encapsulation to None
})
export class VoituresComponent {
  Page_Titre="Gestion des Voitures"

    // Manually created data
    responseData:PeriodicElement[]=[
      {
        image: '../../../../assets/images/Cart-Cars/Cars/BMW M8 Coupe 2022.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: 'BMW X7 M50i 2022' 

      },
      {
        image: '../../../../assets/images/Cart-Cars/Cars/Nissan Maxima Platinum.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: '' 

      },      {
        image: '../../../../assets/images/Cart-Cars/Cars/Porsche Cayenne GTS 2022.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: '' 

      },      {
        image: '../../../../assets/images/Cart-Cars/Cars/Porsche Cayenne GTS 2023.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: '' 

      },      {
        image: '../../../../assets/images/Cart-Cars/Cars/BMW M8 Coupe 2022.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: '' 

      },      {
        image: '../../../../assets/images/Cart-Cars/Cars/Audi A8 L 2022.svg', 
        marque: 'Nissan', 
        modele: 'Maxima Platinum 2022', 
        capacity: "4 persone", 
        quantite: 12, 
        boite: 'automatique', 
        Portes_Energie:"Elictric",
        consommation:"4.2",
        prix:200,
        actions: '' 

      }
    ]




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
  displayedColumns: string[] = ['image', 'marque', 'modele', 'info','prix','quantite','actions'];
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
  image:string, 
  marque: string, 
  modele:string, 
  capacity:string, 
  quantite: number, 
  boite: string, 
  Portes_Energie:string,
  consommation:string,
  prix:number,
  actions: string;
}