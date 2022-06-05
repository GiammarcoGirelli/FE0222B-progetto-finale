import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  apiUrlRoot:string = environment.apiUrlRoot;
  nuovoUser = {username:'',email:'',password:'', role: [] }

  constructor(private http:HttpClient) { }

  //signup(nuovoUser:any) {
  //  return this.http.post<any>(this.apiUrlRoot + '/api/auth/signup',nuovoUser);
  //}

}

