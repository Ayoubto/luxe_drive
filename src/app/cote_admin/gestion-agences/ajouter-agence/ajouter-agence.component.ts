import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AgenceService } from 'src/app/services/agence.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter-agence',
  templateUrl: './ajouter-agence.component.html',
  styleUrls: ['./ajouter-agence.component.css']
})
export class AjouterAgenceComponent {
  Page_Titre="Gestion des Agences"
  form_Titre="Ajouter une agence"

  Managers = ["Firdaous","Abdo","Adnan","ayoub"]

  ajouterAgence: FormGroup;

  constructor(private formBuilder: FormBuilder,private AgenceService: AgenceService,private route: ActivatedRoute) {
    this.ajouterAgence = this.formBuilder.group({
      nom_agence: ['', Validators.required],
      manager: ['', Validators.required],
      email_agence: ['', [Validators.required, Validators.email]],
      telephone_agence: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3})?\d{9,10}$/)]],
      localisation: this.formBuilder.group({
        ville: ['', Validators.required],
        adresse: ['', Validators.required]
      }),
    });
  }
  id: number | null=null;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id ? Number(id) : null;
      
      if (this.id !== null) {
        this.form_Titre="Modifier Agence"
     
      } else {
       
   
      }
    });
    
  }
  formSubmitted = false;
  onSubmit() {
    console.log(this.ajouterAgence.value)
    if(this.ajouterAgence.valid){
      this.AgenceService.AddAgence(this.ajouterAgence.value).subscribe(
      (response:any) => {
          window.location.reload();
          setTimeout(() => {
            alert('Form submitted successfully!');
          }, 100);
      },
      (error:any) => {
        if(error.jwt="Email is already taken"){
     
        }
      }
    );
    this.formSubmitted=true 
    }
    this.formSubmitted=true 
  }
  onSubmitt() {
   
    console.log('Form submitted:', this.ajouterAgence.value);
    this.formSubmitted = true;
  }

  //Font Awesome icons
  email = faEnvelope;
  tele = faPhone;
  adresse = faMapMarkerAlt;
}