import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../core/models/profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }
  configUrl = `${environment.apiUrl}/profiles/`;

  public getProfile(): Observable<Profile> {
    const recup: Observable<any> = this.http.get(this.configUrl);
    const treatment = (parameters:any) => {
      return parameters as Profile;
    };
    return recup.pipe(map(treatment));
  }

  public putProfile(profileForm: any):Observable<Profile> {
    const update: Observable<any> = this.http.put(`${this.configUrl}`, profileForm);
    const treatment = (response:any) => {
      return response as Profile;
    };
    return update.pipe(map(treatment));
  }

}
