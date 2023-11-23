import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css']
})
export class PageReservationComponent implements OnInit {
  filterForm!: FormGroup;

  Cars:Array<any>=[
    {img:"Audi A8 L 2022" , Name:"Audi A8 L 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"},
    {img:"Nissan Maxima Platinum" , Name:"Nissan Maxima Platinum 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"},
    {img:"Porsche Cayenne GTS 2022" , Name:"Porsche Cayenne GTS 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"},
    {img:"BMW M8 Coupe 2022" , Name:"BMW M8 Coupe 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"},
    {img:"BMW X7 M50i 2022" , Name:"BMW X7 M50i 2022" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"},
    {img:"Porsche Cayenne GTS 2023" , Name:"Porsche Cayenne GTS 2023" , price:75.90 , speedometer:"4,00", manual_gearbox:"Auto",users:"4 Personne",gas_station:"Electrique"}
  ]

  Villes = ['Tanger','Casablanca','Marrakech','Agadir','Tétouan'];
  Collections = ['Populaire', 'Luxe', 'Sportive', 'Familiale', 'Tout-Terrain'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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
