import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-ajouter-agence',
  templateUrl: './ajouter-agence.component.html',
  styleUrls: ['./ajouter-agence.component.css']
})
export class AjouterAgenceComponent {
  Page_Titre="Gestion des Agences"

  Managers = ["Firdaous","Abdo","Adnan","ayoub"]

  ajouterAgence: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.ajouterAgence = this.formBuilder.group({
      nom: ['', Validators.required],
      manager: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3})?\d{9,10}$/)]],
      adresse: ['', Validators.required],
    });
  }

  ngOnInit() {}
  formSubmitted = false;
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.ajouterAgence.value);
    this.formSubmitted = true;
  }

  //Font Awesome icons
  email = faEnvelope;
  tele = faPhone;
  adresse = faMapMarkerAlt;
}