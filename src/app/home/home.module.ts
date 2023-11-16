import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MarquesComponent } from './components/marques/marques.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    MarquesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    MarquesComponent,
    SearchComponent

  ]
})
export class HomeModule { }
