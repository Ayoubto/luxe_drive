import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { FlaskService } from 'src/app/services/flask.service';
import { HttpClient,HttpResponse  } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Page_Titre="Tableau de bord"
  img:any
  imageUrl: string=""
  user_count=""
  revenue=""
  reservations_count=""
  constructor(private FlaskService:FlaskService){}

  getrevenu(){
    this.FlaskService.getrevenue().subscribe(
      (rese)=>{
       this.revenue=rese.total_revenue
      },
      error => {
        console.error('Error fetching user count:', error);
      }
    )}
    getreservation(){
      this.FlaskService.getreservations_count().subscribe(
        (rese)=>{
         this.reservations_count=rese.reservations_count
        },
        error => {
          console.error('Error fetching user count:', error);
        }
      )}
      getUser_count(){
        this.FlaskService.getuser_count().subscribe(
          (rese)=>{
           this.user_count=rese.user_count
          },
          error => {
            console.error('Error fetching user count:', error);
          }
        )}

  ngOnInit(){
    this.getUser_count()
    this.getreservation()
    this.getrevenu()
   
   
}
}