import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  postaUserApi(user:any){
    console.log('entrato nel service');
    console.log(user);
    return this.http.post<any>(environment.apiUrlRoot+"/api/auth/signup",user);
  }

  loginUserApi(item: any){
    console.log(item)
    return this.http.post<any>(environment.apiUrlRoot+ '/api/auth/login', item)
  }

  getUserGetAll(q: number){
    return this.http.get<any>(environment.apiUrlRoot+'/api/users?page=' + q)
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('utentecorrente');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
