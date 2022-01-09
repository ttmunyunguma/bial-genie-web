import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://127.0.0.1:8000/api/v1/accounts/';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, user);
  }

  logout(token: string): Observable<any>{
    console.log(token);
    return this.http.get(`${this.baseUrl}/logout/`)
  }
}
