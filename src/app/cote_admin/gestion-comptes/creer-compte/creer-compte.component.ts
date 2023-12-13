import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faEye, faEyeSlash, faKey, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent {
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

  creerCompte: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.creerCompte = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      adresse: ['', Validators.required],
      type: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const confirmPwd = group.get('confirmPwd')?.value;

    return password === confirmPwd ? null : { 'passwordMismatch': true };
  }

  ngOnInit() {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.creerCompte.value);
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
