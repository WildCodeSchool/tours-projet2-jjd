import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user:boolean;
  public loginUser;

  constructor(private http: HttpClient) {
  }

  configUrl = `${environment.apiUrl}/auth/signin`;
  login(email: string, password: string) {
    return this.http.post<any>(`${this.configUrl}`, { email, password })
      .pipe(tap((user) => {
        if (user) {
          this.user = true;
          localStorage.setItem('token', user.token);
        }
      }));
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.user = false;
  }
}
