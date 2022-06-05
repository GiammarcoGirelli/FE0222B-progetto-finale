import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientiApi } from '../models/clienti-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DettaglioClientiService {

  constructor(private http: HttpClient) { }

  getClientiTipoCliente(p : number){
    return this.http.get(environment.apiUrlRoot + '/api/clienti/tipicliente?page=' + p)
  }

  getDettaglioCliente(idCliente: any) {
    return this.http.get<ClientiApi>(environment.apiUrlRoot + '/api/clienti/'+idCliente);
  }

}
