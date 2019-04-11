import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Establishment } from '../core/models/establishment';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  configUrl = 'http://open-reza.herokuapp.com/api/establishments';
  constructor(private http: HttpClient) {
  }

  public getEstablishment(id: string): Observable<Establishment> {
    const obs1: Observable<any> = this.http.get(`${this.configUrl}/${id}`);
    const treatment = (param: any) => {
      return param as Establishment;
    };

    return obs1.pipe(map(treatment));
  }
}
