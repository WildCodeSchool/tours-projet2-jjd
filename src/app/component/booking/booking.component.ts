import { Component, OnInit } from '@angular/core';
import { Booking } from '../../core/models/booking';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public booking: Booking[] = [];
  
  constructor(public bookingService: BookingService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.bookingService.getBooking().subscribe(
      (param: Booking[]) => {
        this.booking = param;
      }
    )
  }
  
  bookingForm = this.fb.group({
    date: this.fb.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    }),
    owner: this.fb.group({
      name: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        city: ['', [Validators.required]],
        number: ['', [Validators.required]],
      }),
      contact: this.fb.group({
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }),
    }),
    numbers: ['', [Validators.required]],
    establishment: ['', [Validators.required]],
  });

  onSubmit() {
    console.log(JSON.stringify(this.bookingForm.value))
  }

};

