import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash,faDoorOpen ,faCog  ,faTrademark ,faCubes,faLayerGroup,faMoneyBill ,faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import {ClientService} from '../../../client.service'


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

creerCompte: FormGroup;

constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private ClientService: ClientService) {
 this.creerCompte = this.formBuilder.group({
   marque: ['', Validators.required],
   modele: ['', Validators.required],
   quantite : ['', [Validators.required]],
   Portes_Energie: ['', [Validators.required, Validators.email]],
   capacity: ['', [Validators.required,]],
   boite: ['', Validators.required],
   consommation: ['', Validators.required],
   prix: ['', Validators.required],
 }, {
   validators: this.passwordMatchValidator
 });

}

passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
 const password = group.get('password')?.value;
 const confirmPwd = group.get('confirmPwd')?.value;

 return password === confirmPwd ? null : { 'passwordMismatch': true };
}

ngOnInit() {
 this.route.params.subscribe(params => {
   const id = params['id'];
   this.id = id ? Number(id) : null;
   
   if (this.id !== null) {
     this.fetchDataById(this.id);
   } else {
     this.responseData = null;

   }

 });
 
}
fetchDataById(id: number): void {
 this.ClientService.getDataById(id).subscribe(
   (data) => {
     this.responseData = data; // Assign fetched data to formData
     
   },
   (error) => {
     console.error('Error fetching data:', error);
     this.responseData = {ERROR:"jfjfjf"}; // Set formData as empty in case of an error
   
   }
 );
 console.log(this.responseData)
}

onSubmit() {
 // Handle form submission logic here
 console.log('Form submitted:', this.creerCompte.value);
}
onSubmitNotEmpty(){
 console.log('Form update:', this.creerCompte.value);

}

//Font Awesome icons


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
