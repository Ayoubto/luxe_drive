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

  constructor(private FlaskService:FlaskService){}

  getChart(){
    console.log("Hello word")
    this.FlaskService.getchart().subscribe(
      rese=>{
        const bolb:Blob=rese.body as Blob;
        const url=window.URL.createObjectURL(bolb);
        window.open(url)
      }

    )}

  ngOnInit(){
   
}
}