import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { faEnvelope, faEye, faEyeSlash, faKey, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import {ClientService} from '../../../client.service'


@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent {
 



    // lire Id 
    hasIdParam: boolean=false;
  
    id: number | null=null;
    responseData: any={};

  Page_Titre="Gestion des Comptes"
  defaultImage = '../../../../assets/images/profile.jpg';
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
  getControlErrors(controlName: string, errorType: string): boolean {
    const control = this.creerCompte.get(controlName);
    return control?.hasError(errorType) || false;
  }

  creerCompte: FormGroup;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private ClientService: ClientService) {
    this.creerCompte = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3})?\d{9,10}$/)]],
      adresse: ['', Validators.required],
      type: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPwd: ['', [Validators.required]],
    },{Validators:this.passwordMatchValidator }
    );
   
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPwd')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPwd')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPwd')?.setErrors(null);
    }
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
  formSubmitted = false;
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted eroors :', this.creerCompte.get("confirmPwd"));
    this.formSubmitted=true
  }
  onSubmitNotEmpty(){
    console.log('Form update:', this.creerCompte.value);

  }

  //Font Awesome icons
  email = faEnvelope;
  tele = faPhone;
  adresse = faMapMarkerAlt;
  password = faKey;
  eyePwd = faEye;
  eyeConfirmPwd = faEye;

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
