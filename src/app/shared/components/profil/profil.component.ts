import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faEnvelope, faEye, faEyeSlash, faKey, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../../client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  profilePicture = '../../../../assets/images/users/Frame 85.svg';
  defaultImage = '../../../../assets/images/profile.jpg';
  currentImage: string = this.profilePicture;

  hasIdParam: boolean=false;
  
  id: number | null=null;
  responseData: any={};

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
    const control = this.modifierProfil.get(controlName);
    return control?.hasError(errorType) || false;
  }

  modifierProfil: FormGroup;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private ClientService: ClientService) {
    this.modifierProfil = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3})?\d{9,10}$/)]],
      adresse: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPwd: ['', [Validators.required, this.matchValues('password')]],
    });
  }

  matchValues(matchTo: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.root.get(matchTo);
      const confirmPwd = control.value;
      
      if (password && confirmPwd !== password.value) {
        return { mismatch: true };
      }
      return null;
    };
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
        this.responseData = {ERROR:""}; // Set formData as empty in case of an error
      
      }
    );
    console.log(this.responseData)
  }
  formSubmitted = false;
  onSubmit() {
    console.log('Form submitted eroors :', this.modifierProfil.get("confirmPwd"));
    this.formSubmitted=true
  }
  onSubmitNotEmpty(){
    console.log('Form update:', this.modifierProfil.value);
  }

  //Font Awesome icons
  email = faEnvelope;
  tele = faPhone;
  adresse = faMapMarkerAlt;
  password = faKey;
  eyePwdActuel = faEyeSlash;
  eyePwd = faEyeSlash;
  eyeConfirmPwd = faEyeSlash;

  hidePasswordActuel = true;
  hidePassword = true;
  hideConfirmPassword = true;

  togglePasswordActuelVisibility(): void {
    this.hidePasswordActuel = !this.hidePasswordActuel;
    this.eyePwdActuel = this.hidePasswordActuel ? faEyeSlash : faEye;
  }
  
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
    this.eyePwd = this.hidePassword ? faEyeSlash : faEye;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
    this.eyeConfirmPwd = this.hideConfirmPassword ? faEyeSlash : faEye;
  }
}