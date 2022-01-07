import { BASE_URL } from './../../constant/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string) {
    return  this.http.post(`${BASE_URL}/login`, {username,password});
  }


  getProducts(){
    return this.http.get(`${BASE_URL}/products`)
  }
}
