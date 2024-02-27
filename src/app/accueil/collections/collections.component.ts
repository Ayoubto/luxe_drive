import { Component } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  constructor(private VoitureService:VoitureService) {}
  responseData: any;

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
  batchSize: number = 6;
  lastIndex: number = 0;
  loadMoreCars() {
    const nextIndex = this.lastIndex + this.batchSize;
    if (nextIndex <= this.responseData.length) {
      this.displayedCars = this.displayedCars.concat(this.responseData.slice(this.lastIndex, nextIndex));
      this.lastIndex = nextIndex;
    }
  }

  ngOnInit() {
    this.getVoituresData()
  }
  Cars:Array<any>=[
    {img:"../../../assets/images/Services-Picuters/1.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/2.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/3.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/4.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/5.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"},
    {img:"../../../assets/images/Services-Picuters/8.svg", Service :"Couscous pour dejeuner ",price:"79.90",description:"Rejoignez-nous pour un repas traditionnel où vous pourrez déguster des plats locaux préparés avec amour !"}


  ]
  Collections = ['Familial', 'coopérative', 'Autres'];
}