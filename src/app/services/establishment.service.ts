import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Establishment } from '../core/models/establishment';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  // http://open-reza.herokuapp.com/api/establishments/5cadddf54170bf000fdb82ec
  configUrl = 'https://api.nasa.gov/planetary/apod?api_key=zaMnibcBzlEfTvN0DSJCY7FWbHMt15e5povg1c3b';
  constructor(private http: HttpClient) {
  }
  public getEstablishment(): Observable<Establishment[]> {
    const obs1: Observable<any> = this.http.get(this.configUrl);
    const treatment = (param: any) => {
      return param as Establishment[];
    };

    return obs1.pipe(map(treatment));
  }
}
