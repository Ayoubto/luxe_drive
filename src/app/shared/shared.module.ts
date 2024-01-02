import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopupInscriptionComponent } from './popup-inscription/popup-inscription.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    PopupInscriptionComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  exports:[
    HeaderComponent,

  ]
})
export class SharedModule { }
