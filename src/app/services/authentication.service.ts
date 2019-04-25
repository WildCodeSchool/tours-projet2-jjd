import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user:boolean;

  constructor(private http: HttpClient) {
  }

  configUrl = 'http://open-reza.herokuapp.com/api/auth/signin';
  login(email: string, password: string) {
    return this.http.post<any>(`${this.configUrl}`, { email, password })
      .pipe(tap((user) => {
        if (user) {
          this.user = true;
          localStorage.setItem('token', user.token);
        }
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.user = false;
  }
}
