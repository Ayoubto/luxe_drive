import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from '../services/voiture.service';
import { ListingsService } from '../services-api/listings.service';

@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css']
})
export class PageReservationComponent implements OnInit {
  filterForm!: FormGroup;

  responseData: any;
  getListing() {
    this.ListingsService.getAllListing().subscribe(
      (data) => {    
        this.responseData = data ;
        this.loadMoreCars();
       
      },
      (error) => {
        console.error(error);
        console.log("Hello word error here ")
      }
    );
  }
  getVoituresData() {
    this.VoitureService.getAllAVoiture().subscribe(
      (data) => {    
        this.responseData = data ;
        this.loadMoreCars();
      },
      (error) => {
        console.error(error);
        console.log("Hello word")
      }
    );
  }
 
  displayedCars: any[] = [];
  batchSize: number = 9;
  lastIndex: number = 0;
  loadMoreCars() {
    const nextIndex = this.lastIndex + this.batchSize;
    if (nextIndex <= this.responseData.length) {
      this.displayedCars = this.displayedCars.concat(this.responseData.slice(this.lastIndex, nextIndex));
      this.lastIndex = nextIndex;
    }
  }
  Cars:Array<any>=[
    {img:"../../../assets/images/Services-Picuters/1.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/2.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/3.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/4.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/5.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/8.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"}
  ]

  Villes = ['Tanger','Casablanca','Marrakech','Agadir','Tétouan'];
  Collections = ['Populaire', 'Luxe', 'Sportive', 'Familiale', 'Tout-Terrain'];

  constructor(private formBuilder: FormBuilder,private VoitureService:VoitureService,private ListingsService:ListingsService) {}

  ngOnInit() {
    this.getListing()
    this.filterForm = this.formBuilder.group({
      Collection: ['', Validators.required],
      Prix: ['', Validators.required],
      Ville: ['', Validators.required],
      Date: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.filterForm.value);
  }
}
