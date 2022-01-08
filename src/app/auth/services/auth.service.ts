import { BASE_URL } from './../../constant/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string) {
    return  this.http.post(`${BASE_URL}/login`, {username,password}).pipe(map((res: any)=>{

      debugger;
      if (res && res['access_token']) {
        localStorage.setItem('token', res['access_token']);
        return true;
      }
      return false;
    }));
  }


  getProducts(){
    return this.http.get(`${BASE_URL}/products`)
  }
}
