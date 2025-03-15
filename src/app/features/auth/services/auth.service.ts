//Angular
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
//Models
import { IUser, IUserAuthSignin, IUserAuthSignup } from '../types/auth.type';
//Rxjs
import { Observable, tap,merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/v1/auth';
  user = signal<IUser | null>(null);
  constructor() {}

  signup(authDto: IUserAuthSignup): Observable<IUser> {
    const signupEndPoint = `${this.apiUrl}/signup`;
    return this.http
      .post<IUser>(signupEndPoint, authDto, { withCredentials: true })
      .pipe(
        tap((user) => {
          this.user.set(user);
        })
      );
  }

  signin(authDto: IUserAuthSignin): Observable<IUser> {
    const signinEndPoint = `${this.apiUrl}/signin`;
    return this.http
      .post<IUser>(signinEndPoint, authDto, { withCredentials: true })
      .pipe(
        tap((user) => {
          this.user.set(user);
        })
      );
  }

  signout(): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}/signout`, null, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.user.set(null);
        })
      );
  }

  checkAuth(): Observable<IUser | null> {
    return this.http
      .get<IUser>(`${this.apiUrl}/check-auth`, { withCredentials: true })
      .pipe(
        tap((user) => {
          this.user.set(user);
        })
      );
  }
}
