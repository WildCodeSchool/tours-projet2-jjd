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
  configUrl1 = 'http://open-reza.herokuapp.com/api/establishments';

  constructor(private http: HttpClient) {}
  public getBooking(id): Observable<Booking> {
    const obs1:Observable<any> = this.http.get(`${this.configUrl}/${id}`);
    const treatment = (param:any) => {
      return param as Booking;
    };
    return obs1.pipe(map(treatment));
  }
  public getListBooking(id): Observable<Booking[]> {
    const obs1:Observable<any> = this.http.get(`${this.configUrl1}/${id}/bookings`);
    const treatment = (param:any) => {
      return param as Booking[];
    };
    return obs1.pipe(map(treatment));
  }
  public postBooking(booking: any): Observable<Booking> {
    const obs1: Observable<any> = this.http.post(`${this.configUrl}`, booking);
    const treatment = (param: any) => {
      return param as Booking;
    };
    return obs1.pipe(map(treatment));
  }
  public putBooking(id: string, booking: any): Observable<Booking> {
    const obs1: Observable<any> = this.http.put(`${this.configUrl}/${id}`, booking);
    const treatment = (param: any) => {
      return param as Booking;
    };
    return obs1.pipe(map(treatment));
  }
  public deleteBooking(id): Observable<Booking[]> {
    const obs1: Observable<any> = this.http.delete(`${this.configUrl}/${id}`);
    const treatment = (param: any) => {
      return param as Booking[];
    };
    return obs1.pipe(map(treatment));
  }
}
