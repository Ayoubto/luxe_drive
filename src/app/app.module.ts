import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCarsComponent } from './voitures/search-cars/search-cars.component';
import { CartCarComponent } from './voitures/cart-car/cart-car.component';
import { CommentFonctionneComponent } from './accueil/comment-fonctionne/comment-fonctionne.component';
import { NosServicesComponent } from './accueil/nos-services/nos-services.component';
import { CommentaireComponent } from './accueil/commentaire/commentaire.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageAgencesComponent } from './page-agences/page-agences.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { MarquesComponent } from './accueil/marques/marques.component';
import { HeroSectionComponent } from './accueil/hero-section/hero-section.component';
import { CollectionsComponent } from './accueil/collections/collections.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageContactComponent } from './page-contact/page-contact.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchCarsComponent,
    CartCarComponent,
    CommentFonctionneComponent,
    NosServicesComponent,
    CommentaireComponent,
    FooterComponent,
    PageAgencesComponent,
    PageReservationComponent,
    PageHomeComponent,
    MarquesComponent,
    HeroSectionComponent,
    CollectionsComponent,
    ContactComponent,
    PageContactComponent,    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }