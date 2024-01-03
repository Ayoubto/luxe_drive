import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopupInscriptionComponent } from './popup-inscription/popup-inscription.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilComponent } from './components/profil/profil.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PopupInscriptionComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports:[
    HeaderComponent,

  ]
})
export class SharedModule { }
