import { Component, OnInit } from '@angular/core';
import { BooktoflyService } from '../../services/booktofly.service';
import { BookingModel } from 'src/app/models/BookingModel';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html'
})
export class BookingsComponent implements OnInit {

  bookings: BookingModel [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
