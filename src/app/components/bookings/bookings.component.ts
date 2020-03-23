import { Component, OnInit } from '@angular/core';
import { BooktoflyService } from '../../services/booktofly.service';
import { BookingModel } from 'src/app/models/BookingModel';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html'
})
export class BookingsComponent implements OnInit {

  
  token: string;
  bookings: BookingModel [] = [];

  constructor( private booktofly: BooktoflyService ) { }

 


  ngOnInit(): void {

    this.booktofly.getToken().subscribe(data => {
      this.token = data;
    });
  }


}
