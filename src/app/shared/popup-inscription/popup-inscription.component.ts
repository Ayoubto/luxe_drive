import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-popup-inscription',
  templateUrl: './popup-inscription.component.html',
  styleUrls: ['./popup-inscription.component.css']
})
export class PopupInscriptionComponent {
  @Output() dataEvent = new EventEmitter<boolean>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  formSubmitted = false;
  formSubmitted_connecter = false;
  compte_deja_exist=false;
  erro_de_connecter=false;

  newCompte: FormGroup;
  se_connecter:FormGroup;
  constructor(private formBuilder: FormBuilder,private authService: AuthService){
  this.newCompte = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3})?\d{9,10}$/)]],
    password: ['',[ Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    confirmePassword: ['', [Validators.required, this.matchValues('password') ]],
  });
  this.se_connecter=this.formBuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]
  })
};

matchValues(matchTo: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.root.get(matchTo);
    const confirmPassword = control.value;
    
    if (password && confirmPassword !== password.value) {
      return { mismatch: true };
    }
    return null;
  };
}

  getControlErrors(formGroup: FormGroup,controlName: string, errorType: string): boolean {
    const control = formGroup.get(controlName);
    return control?.hasError(errorType) || false;
  }





  
  inscrire() {
    if(this.newCompte.valid){
         this.authService.setAuthToken("adnanelhayanijwtadnanelhayanijwtadnanelhayanijwt"); 
    this.authService.registerUser(this.newCompte.value).subscribe(
      (response:any) => {
        if (response.jwt) {
          const dataToSend = true; 
          this.dataEvent.emit(dataToSend);
          localStorage.setItem('token', response.jwt);
          this.close.emit();
        } else {
           
        }
      },
      (error:any) => {
        if(error.jwt="Email is already taken"){
           this.compte_deja_exist=true
        }
      }
    );
    this.formSubmitted=true 
    }
    this.formSubmitted=true 
  }

  connecter(){
    if(this.se_connecter.valid){
      this.authService.setAuthToken("adnanelhayanijwtadnanelhayanijwtadnanelhayanijwt"); 
  this.authService.authenticateUser(this.se_connecter.value).subscribe(
   (response:any) => {
     if (response.jwt) {
       const dataToSend = true; 
       this.dataEvent.emit(dataToSend);
       localStorage.setItem('token', response.jwt);
       this.close.emit();
       console.log("tru ")
     } else {
        console.log("some thisng error")
     }
   },
   (error:any) => {
     if(error.jwt="Invalid email or password"){
        this.erro_de_connecter=true
     }
   }
 );
 this.formSubmitted_connecter=true 
 }
 this.formSubmitted_connecter=true 

  }

  

  closePopup() {
    this.close.emit();
  }

   Va:boolean=false
   seatch(){
    this.Va=!this.Va
   }  
   ngOnInit(){

  }
}
