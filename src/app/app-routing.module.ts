import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAgencesComponent } from './page-agences/page-agences.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {ComptesComponent} from './cote_admin/gestion-comptes/comptes/comptes.component'
import {CreerCompteComponent} from './cote_admin/gestion-comptes/creer-compte/creer-compte.component'
import { DashboardComponent}  from './cote_admin/dashboard/dashboard.component'
import { PreReservationsComponent } from './cote_admin/gestion-reservations/pre-reservations/pre-reservations.component';
import { ReservationsComponent } from './cote_admin/gestion-reservations/reservations/reservations.component';
import { AgencesComponent } from './cote_admin/gestion-agences/agences/agences.component';
import { AjouterAgenceComponent } from './cote_admin/gestion-agences/ajouter-agence/ajouter-agence.component';
import { InboxComponent } from './cote_admin/inbox/inbox.component';
import { AjouterVoitureComponent } from './cote_admin/gestion-voitures/ajouter-voiture/ajouter-voiture.component';
import { VoituresComponent } from './cote_admin/gestion-voitures/voitures/voitures.component';
import { ProfilComponent } from './shared/components/profil/profil.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"accueil",component:PageHomeComponent},
  {path:"profil",component:ProfilComponent},
  {path:"contact",component:PageContactComponent},
  {path:"nos-agences",component:PageAgencesComponent},
  {path:"nos-voitures",component:PageReservationComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"ajouter-compte",component:CreerCompteComponent , canActivate: [AuthGuard]},
  {path:"modifier-compte/:id",component:CreerCompteComponent},
  {path:"comptes",component:ComptesComponent},
  {path:"ajouter-agence",component:AjouterAgenceComponent},
  {path:"agences",component:AgencesComponent},
  {path:"ajouter-voiture",component:AjouterVoitureComponent},
  {path:"voitures",component:VoituresComponent},
  {path:"pre-reservations",component:PreReservationsComponent},
  {path:"reservations",component:ReservationsComponent},
  {path:"inbox",component:InboxComponent},
  {path:"**",redirectTo:"accueil",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }