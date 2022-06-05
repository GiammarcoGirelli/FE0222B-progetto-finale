import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fatture } from '../models/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }

  getFattureGetAll(p: number) {
    return this.http.get<any>(environment.apiUrlRoot + '/api/fatture?page=' + p);
  }


  getFatturaCliente(idFattura: any) {
    return this.http.get<Fatture>(environment.apiUrlRoot + '/api/fatture/'+idFattura);
  }

}
