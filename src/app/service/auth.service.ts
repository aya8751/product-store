import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private loggedIn = false;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    this.loggedIn = true;
    return this.http.post<any>(this.apiUrl, body);
  }
}
