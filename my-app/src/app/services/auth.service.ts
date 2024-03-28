import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, of, tap, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = `${environment.base_url}/auth`;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.baseUrl}/login`, user)
    .pipe (
      tap((res: { token: string }) =>
        localStorage.setItem('user_token', res.token)
      ),
      map((res: { token: string }): User => this.parseJwt(res.token)),
    );
  }

  register(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.baseUrl}/register`, user)
    .pipe (
      tap(({token}) => localStorage.setItem('user_token', token)),
    );
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): User | null {
    const token = localStorage.getItem('user_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    } else return null;
  }

  public get token(): string | null {
    return localStorage.getItem('user_token');
  }
}

