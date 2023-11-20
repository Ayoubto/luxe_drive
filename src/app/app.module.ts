import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { HomeModule } from './home/home.module';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { CartCarComponent } from './cart-car/cart-car.component';
import { CarsComponent } from './cars/cars.component';
import { CommentFonctionneComponent } from './comment-fonctionne/comment-fonctionne.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { FooterComponent } from './footer/footer.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAgencesComponent } from './page-agences/page-agences.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { MarquesComponent } from './marques/marques.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCarsComponent,
    CartCarComponent,
    CarsComponent,
    CommentFonctionneComponent,
    NosServicesComponent,
    CommentaireComponent,
    FooterComponent,
    PageContactComponent,
    PageAgencesComponent,
    PageReservationComponent,
    PageHomeComponent,
    MarquesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
