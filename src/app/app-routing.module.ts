import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAgencesComponent } from './page-agences/page-agences.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {ComptesComponent} from './cote_admin/gestion-comptes/comptes/comptes.component'
import {CreerCompteComponent} from './cote_admin/gestion-comptes/creer-compte/creer-compte.component'
const routes: Routes = [
  {path:"home",component:PageHomeComponent},
  {path:"contact",component:PageContactComponent},
  {path:"agences",component:PageAgencesComponent},
  {path:"reservation",component:PageReservationComponent},
  {path:"accueil/gestion-des-comptes",component:ComptesComponent},
  {path:"accueil/ajouter-compte",component:CreerCompteComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }