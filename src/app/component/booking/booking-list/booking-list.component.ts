import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../core/models/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  public booking: Booking;
  constructor(public bookingService: BookingService ) { }

  ngOnInit() {
    this.bookingService.getListBooking().subscribe((param: Booking) => {
      console.log(this.booking = param);
    });
  }
}
