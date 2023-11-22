import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopupInscriptionComponent } from './popup-inscription/popup-inscription.component';
import { PopupConnextionComponent } from './popup-connextion/popup-connextion.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    PopupInscriptionComponent,
    PopupConnextionComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  exports:[
    HeaderComponent,

  ]
})
export class SharedModule { }
