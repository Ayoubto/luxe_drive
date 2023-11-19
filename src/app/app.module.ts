import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { CartCarComponent } from './cart-car/cart-car.component';
import { CarsComponent } from './cars/cars.component';
import { CommentFonctionneComponent } from './comment-fonctionne/comment-fonctionne.component';
import { NosServicesComponent } from './nos-services/nos-services.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCarsComponent,
    CartCarComponent,
    CarsComponent,
    CommentFonctionneComponent,
    NosServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
