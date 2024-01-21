import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AgenceService } from 'src/app/services/agence.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder,private AgenceService: AgenceService,private route: ActivatedRoute,private router: Router) {
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
  initializeFormValues() {
    if (this.responseData) {
      this.ajouterAgence.patchValue({
        nom_agence:this.responseData.nom_agence || '',
        manager:this.responseData.manager || '',
        email_agence:this.responseData.email_agence || '',
        telephone_agence:this.responseData.telephone_agence || '',
        localisation: {
          ville: this.responseData.localisation?.ville || '',
          adresse: this.responseData.localisation?.adresse || '',
        },

      });
    }
  }
  id: number | null=null;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id.toString() ;
      
      if (this.id !== null) {
        this.form_Titre="Modifier compte"
        
        this.fetchDataById(id);
      
      if (this.id !== null) {
        this.form_Titre="Modifier Agence"
     
      } else {
       
   
      }
    }});
    
  }
  responseData: any={};
  fetchDataById(id: number): void {
    this.AgenceService.getAgence(id).subscribe(
      (data) => {
        this.responseData = data;
        this.initializeFormValues()
        
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.responseData = {ERROR:"jfjfjf"}; // Set formData as empty in case of an error
      
      }
    );
    console.log(this.responseData)
   }

  formSubmitted = false;
  onSubmit() {
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

  onSubmitNotEmpty(){
    this.formSubmitted=true 

    if(this.id){
      if(this.ajouterAgence.valid){
      this.AgenceService.updateAgence(this.id ,this.ajouterAgence.value).subscribe(
      (response:any) => {    
        console.log(response)    
          this.router.navigateByUrl('/agences');  
      },
      
    );         
      }

  
    }

  }

  //Font Awesome icons
  email = faEnvelope;
  tele = faPhone;
  adresse = faMapMarkerAlt;
}