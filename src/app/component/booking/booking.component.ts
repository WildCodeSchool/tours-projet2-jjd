import { Component, OnInit } from '@angular/core';
import { Booking } from '../../core/models/booking';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  public booking: Booking;
  public id;
  public establishmentId;

  constructor(
    public bookingService: BookingService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.establishmentId = params.get('establishmentId');
      if (this.establishmentId) {
        this.bookingForm.patchValue({ establishment: this.establishmentId });
      }
      this.id = params.get('id');
      if (this.id) {
        this.bookingService.getBooking(this.id).subscribe((param: Booking) => {
          this.booking = param;
          this.bookingForm.patchValue(param);
        });
      }
    });
  }

  bookingForm = this.fb.group({
    date: this.fb.group({
      start: [''],
      end: [''],
    }),
    owner: this.fb.group({
      name: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
        city: ['', [Validators.required]],
        number: ['', [Validators.required]],
      }),
      contact: this.fb.group({
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }),
    }),
    numbers: ['', [Validators.required]],
    establishment: [this.establishmentId],
  });

  onSubmit() {
    if (this.id) {
      this.toastr.warning('Being update', 'Booking being Updater');
      this.bookingService.putBooking(
        this.id, this.bookingForm.value).subscribe(
          (booking: Booking) => {
            this.bookingForm.patchValue(booking);
            this.toastr.clear();
            this.toastr.success('success', 'Booking Updater');
            this.router.navigateByUrl('/');
          },
          (error) => {
            this.toastr.clear();
            this.toastr.error(`Error ${error}`);
          });
    } else {
      this.toastr.warning('Being create', 'Booking being Create');
      this.bookingService.postBooking(
        this.bookingForm.value).subscribe(
          (booking: Booking) => {
            this.bookingForm.patchValue(booking);
            this.toastr.clear();
            this.toastr.success('success', 'Booking Create');
            this.router.navigateByUrl('/');
          },
          (error) => {
            this.toastr.clear();
            this.toastr.error(`Error ${error}`);
          });
    }
  }
}
