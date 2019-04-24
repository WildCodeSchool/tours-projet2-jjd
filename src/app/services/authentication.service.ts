import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../core/models/profile';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  // 'http://open-reza.herokuapp.com/api/auth/signup';
  configUrl = null;

  public postAuthentication(profile: any): Observable<Profile> {
    const recup: Observable<any> = this.http.post(`${this.configUrl}`, profile);
    const treatment = (parameters: any) => {
      return parameters as Profile;
    };
    return recup.pipe(map(treatment));
  }
}
