import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash,faDoorOpen ,faCog  ,faTrademark ,faCubes,faLayerGroup,faMoneyBill ,faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css']
})
export class AjouterVoitureComponent {
  Page_Titre="Gestion des Voitures"


 // lire Id 
 hasIdParam: boolean=false;
  
 id: number | null=null;
 responseData: any={};


defaultImage = '../../../../assets/images/voiture.png';
currentImage: string = this.defaultImage;

onAddImage() {
 const fileInput = document.createElement('input');
 fileInput.type = 'file';
 fileInput.accept = 'image/*';
 fileInput.click();

 fileInput.addEventListener('change', (event: any) => {
   const file = event.target.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = (e: any) => {
       this.currentImage = e.target.result;
     };
     reader.readAsDataURL(file);
   }
 });
}

onRemoveImage() {
 this.currentImage = this.defaultImage;
}

creervoiture: FormGroup;

constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private VoitureService: VoitureService,private router: Router) {
 this.creervoiture = this.formBuilder.group({
   marque: ['', Validators.required],
   modele: ['', Validators.required],
   quantite : ['', [Validators.required]],
   carburant: ['', [Validators.required]],
   nb_personnes: ['', [Validators.required,]],
   manual_gearbox: ['', Validators.required],
   consommation: ['', Validators.required],
   prix: ['', Validators.required],
 }
 );
}
initializeFormValues() {
  if (this.responseData) {
    this.creervoiture.patchValue({
      marque:this.responseData.marque || '',
      modele:this.responseData.modele || '',
      quantite:this.responseData.quantite || '',
      carburant:this.responseData.carburant || '',
      nb_personnes: this.responseData.nb_personnes || '', 
      manual_gearbox: this.responseData.manual_gearbox || '', 
      consommation: this.responseData.consommation || '', 
      prix: this.responseData.prix || '', 
    });
  }
}

passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
 const password = group.get('password')?.value;
 const confirmPwd = group.get('confirmPwd')?.value;

 return password === confirmPwd ? null : { 'passwordMismatch': true };
}
form_Titre="Modifier compte"
ngOnInit() {
  this.route.params.subscribe(params => {
    const id = params['id'];
    console.log(id)
    this.id = id.toString() ;
    
    if (this.id !== null) {
      this.form_Titre="Modifier compte"
      
      this.fetchDataById(id);
    
      
    } else {
      this.responseData = null;
 
    }
  });
 
}
fetchDataById(id: number): void {
 this.VoitureService.getVoitureById(id).subscribe(
   (data) => {
     this.responseData = data;
     console.log(this.responseData)
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
  this.formSubmitted = true;
  if(this.creervoiture.valid){
    this.VoitureService.Addvoiture(this.creervoiture.value).subscribe(
      (response:any) => {             
          setTimeout(() => {
            alert('add voiture  successfully!');
          }, 100);
      },     
    (error) => {
      console.error('Error adding voiture:', error);
      alert('Error adding voiture. Please try again later.');
    }
  );    
  }
}

clearForm() {
  this.creervoiture.reset(); // Reset the entire form
  this.formSubmitted = false;
}

onSubmitNotEmpty(){
  if(this.id){
    this.VoitureService.upadeteVoiture(this.id ,this.creervoiture.value).subscribe(
    (response:any) => {    
      console.log(response)    
        this.router.navigateByUrl('/voitures');  
    },
    
  ); 

  }
}



eyePwd = faEye;

marque=faTrademark
modele=faCubes
Quantity=faLayerGroup 
eyeConfirmPwd = faEye;
energy=faDoorOpen ;
boite=faCog  
price=faMoneyBill 
concommation=faTachometerAlt 
hidePassword = true;
hideConfirmPassword = true;

togglePasswordVisibility(): void {
 this.hidePassword = !this.hidePassword;
 this.eyePwd = this.hidePassword ? faEye : faEyeSlash;
}

toggleConfirmPasswordVisibility(): void {
 this.hideConfirmPassword = !this.hideConfirmPassword;
 this.eyeConfirmPwd = this.hideConfirmPassword ? faEye : faEyeSlash;
}
}
