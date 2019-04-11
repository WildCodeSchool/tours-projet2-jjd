import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from '../core/models/booking';
@Injectable({
  providedIn: 'root',
})
export class BookingService {

  configUrl = 'http://open-reza.herokuapp.com/api/bookings';

  constructor(private http: HttpClient) {}
  public getBooking(id): Observable<Booking> {
    const obs1:Observable<any> = this.http.get(`${this.configUrl}/${id}`);
    const treatment = (param:any) => {
      return param as Booking;
    };
    return obs1.pipe(map(treatment));
  }
}
