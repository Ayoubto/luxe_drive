import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { MenuComponent } from './cote_admin/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './cote_admin/dashboard/dashboard.component';
import { CreerCompteComponent } from './cote_admin/gestion-comptes/creer-compte/creer-compte.component';
import { HeaderAdminComponent } from './cote_admin/header-admin/header-admin.component';
import { ComptesComponent } from './cote_admin/gestion-comptes/comptes/comptes.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestComponent } from './test/test.component';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule from Angular Material
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
    MenuComponent,
    DashboardComponent,
    CreerCompteComponent,
    HeaderAdminComponent,
    ComptesComponent,
    TestComponent,    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }