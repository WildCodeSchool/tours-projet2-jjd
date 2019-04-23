import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Establishment } from '../core/models/establishment';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  configUrl = 'http://open-reza.herokuapp.com/api/profiles/establishments';
  configUrlEstablishment = 'http://open-reza.herokuapp.com/api/establishments';
  constructor(private http: HttpClient) {
  }

  public getEstablishment(id: string): Observable<Establishment> {
    const obs1: Observable<any> = this.http.get(`${this.configUrlEstablishment}/${id}`);
    const treatment = (param: any) => {
      return param as Establishment;
    };
    return obs1.pipe(map(treatment));
  }

  public postEstablishment(establishment: any): Observable<Establishment> {
    const obs1: Observable<any> = this.http.post(`${this.configUrlEstablishment}`, establishment);
    const treatment = (param: any) => {
      return param as Establishment;
    };
    return obs1.pipe(map(treatment));
  }

  public putEstablishment(id: string, establishment: any): Observable<Establishment> {
    const obs1: Observable<any> =
      this.http.put(`${this.configUrlEstablishment}/${id}`, establishment);
    const treatment = (param: any) => {
      return param as Establishment;
    };
    return obs1.pipe(map(treatment));
  }

  public deleteEstablishment(id: string): Observable<Establishment[]> {
    const obs1: Observable<any> = this.http.delete(`${this.configUrlEstablishment}/${id}`);
    const treatment = (param: any) => {
      return param as Establishment[];
    };
    return obs1.pipe(map(treatment));
  }

  public getListEstablishment(): Observable<Establishment[]> {
    const obs1: Observable<any> = this.http.get(`${this.configUrl}`);
    const treatment = (param: any) => {
      return param as Establishment[];
    };

    return obs1.pipe(map(treatment));
  }

  public getAllEstablishment(): Observable<Establishment[]> {
    const obs1: Observable<any> = this.http.get(`${this.configUrlEstablishment}`);
    const treatment = (param: any) => {
      return param as Establishment[];
    };

    return obs1.pipe(map(treatment));
  }

}
