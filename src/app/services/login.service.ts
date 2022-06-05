import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';
import { LoginAdmin } from '../models/login-admin';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiUrlRoot:string = environment.apiUrlRoot;

  constructor(private http:HttpClient) { }

  login(data:Login){
    try {
      console.log("Accesso effettuato");
      return this.http.post<User>(this.apiUrlRoot + '/api/auth/login',data );
    } catch (error) {
      return alert("Accesso non effettuato correttamente")
    }
  }

}
