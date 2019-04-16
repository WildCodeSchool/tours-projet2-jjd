import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../core/models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }
  configUrl = 'http://open-reza.herokuapp.com/api/profiles/';

  public getProfile(): Observable<Profile> {
    const obs1: Observable<any> = this.http.get(this.configUrl);
    const treatment = (param:any) => {
      return param as Profile;
    };
    return obs1.pipe(map(treatment));
  }

  public getListProfile():Observable<Profile> {
    const obs1: Observable<any> = this.http.get(`${this.configUrl}`);
    const treatment = (param:any) => {
      return param as Profile;
    };
    return obs1.pipe(map(treatment));
  }

  public putProfile(profileForm: any):Observable<Profile> {
    const obs2: Observable<any> = this.http.put(`${this.configUrl}`, profileForm);
    const treatment = (response:any) => {
      return response as Profile;
    };
    return obs2.pipe(map(treatment));
  }

}
