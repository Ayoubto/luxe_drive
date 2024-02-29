import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  searchForm!: FormGroup;
  Agences = [
    ' Tanger ',
    ' Tanger ',
    ' Casablanca ',
    ' Casablanca ',
    ' Marrakech ',
    ' Marrakech ',
    ' Agadir ',
    ' Agadir ',
    ' Tétouan '
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      lieuDepart: ['', Validators.required],
      dateDepart: ['', Validators.required],
      lieuRetour: ['', Validators.required],
      dateRetour: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.searchForm.value);
  }
}
