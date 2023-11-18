import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  Cars:Array<any>=[
    {img:"Audi A8 L 2022" , Name:"Audi A8 L 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",},
    {img:"Nissan Maxima Platinum" , Name:"Nissan Maxima Platinum 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",},
    {img:"Porsche Cayenne GTS 2022" , Name:"Porsche Cayenne GTS 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",},
    {img:"BMW M8 Coupe 2022" , Name:"BMW M8 Coupe 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",},
    {img:"BMW X7 M50i 2022" , Name:"BMW X7 M50i 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",},
    {img:"Porsche Cayenne GTS 2023" , Name:"Porsche Cayenne GTS 2023" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 person",gas_station:"Electirc",}

  ]
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
