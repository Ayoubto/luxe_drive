import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
import { AgenceService } from 'src/app/services/agence.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-confirmer-reservation',
  templateUrl: './confirmer-reservation.component.html',
  styleUrls: ['./confirmer-reservation.component.css']
})
export class ConfirmerReservationComponent {
  voiture: any;
  agence: any;
  idUser: any;
  nomUser : any;
  emailUser : any;
  idReservation: any;
  reservation: any;
  reservationForm!: FormGroup;
  helper = new JwtHelperService();
  Va:boolean=false
  constructor(private VoitureService:VoitureService, private AgenceService:AgenceService, private ReservationService:ReservationService, private formBuilder: FormBuilder, private datePipe: DatePipe) {}
  
  @Input() id!: any
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.getData();

    this.getAgences();

    this.reservationForm = this.formBuilder.group({
      agence_depart_id: ['', Validators.required],
      date_debut: ['', Validators.required],
      agence_retour_id: ['', Validators.required],
      date_fin: ['', Validators.required]
    });
  }

  closePopup() {
    this.close.emit();
  }

  getData() {
    this.VoitureService.getVoitureById(this.id).subscribe(
      (responseData) => {
        this.voiture = responseData
      },
      (error) => {
        console.error("Error:", error);
      }
    )
  }

  getAgences() {
    this.AgenceService.getAllAgence().subscribe(
      (responseData) => {
        this.agence = responseData
      },
      (error) => {
        console.error("Error:", error);
      }
    )
  }

  calculateNumberOfDays(): number {
    const startDate: Date | null = this.reservationForm.get('date_debut')?.value;
    const endDate: Date | null = this.reservationForm.get('date_fin')?.value;
  
    if (startDate && endDate) {
      const start = this.datePipe.transform(startDate, 'yyyy-MM-dd') || '';
      const end = this.datePipe.transform(endDate, 'yyyy-MM-dd') || '';
  
      const startMilliseconds = new Date(start).getTime();
      const endMilliseconds = new Date(end).getTime();
  
      const millisecondsInDay = 24 * 60 * 60 * 1000;
      const differenceInDays = Math.floor((endMilliseconds - startMilliseconds) / millisecondsInDay);
  
      return differenceInDays;
    }
  
    return 0;
  }

  calculateTotalPrice(): number {
    const dailyPrice: number = this.voiture.prix;
    const numberOfDays: number = this.calculateNumberOfDays();

    if (dailyPrice && numberOfDays) {
      return dailyPrice * numberOfDays;
    }

    return 0;
  }

  onSubmit() {
    this.Va = !this.Va
    console.log(this.Va)

    const token = localStorage.getItem('token');
    if(!!token){
      const decodetoken= this.helper.decodeToken(token);
      this.idUser = decodetoken.id
      this.nomUser = decodetoken.prenom
      this.emailUser = decodetoken.sub
    }

    const reservationFormValue = {
      ...this.reservationForm.value,
      voiture_id: this.voiture.id,
      Prix_Total: this.calculateTotalPrice(),
      user_id: this.idUser,
    };
   
    this.ReservationService.addreservation(reservationFormValue).subscribe(
      (responseData) => {
        this.idReservation = responseData.message
        console.log(this.idReservation)
      },
      (error) => {
        console.error("Error:", error);
      }
    )
  }
  fetchDataById(id: any) {
    throw new Error('Method not implemented.');
  } 
}