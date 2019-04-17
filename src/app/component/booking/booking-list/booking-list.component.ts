import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../core/models/booking';
import { ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  public booking: Booking[];
  public id: string;
  constructor(public bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.bookingService.getListBooking(this.id).subscribe((param: Booking[]) => {
      this.booking = param;
    });
  }

  deleteBooking(id, index) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.booking.splice(index, 1);
    });
  }
}
