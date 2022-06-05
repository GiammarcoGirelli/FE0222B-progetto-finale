import { Injectable } from '@angular/core';
import { ClientiApi } from '../models/clienti-api';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient) { }

  getClientiGetAll(p : number){
    return this.http.get<any>(environment.apiUrlRoot +'/api/clienti?page='+p)
  }

  getById(id: number) {
    return this.http.get(environment.apiUrlRoot+"/api/clienti/"+id);
  }

  modificaCliente(modificaSuCliente: any) {
    return this.http.put(environment.apiUrlRoot+"/api/clienti/"+modificaSuCliente.id, modificaSuCliente);
  }

  eliminaCliente(id: number) {
    return this.http.delete(environment.apiUrlRoot+"/api/clienti/"+id)
  }

  prendiFatturePerCliente(id: number, p: number) {
    return this.http.get(environment.apiUrlRoot+"/api/fatture/cliente/"+id+"?page=${p}&size=20&sort=id,ASC")
  }

  getByCliente(id: number) {
    return this.http.get<any>(environment.apiUrlRoot+"/api/fatture/cliente/"+id+"?page=0&size=200&sort=id,ASC"
    );
  }

  cancellaFatture(id: number) {
    return this.http.delete(environment.apiUrlRoot+"/api/fatture/cliente/"+id);
  }

  aggiungiCliente(nuovoCliente: ClientiApi) {
    console.log(nuovoCliente);
    var ritornoApi =this.http.post(environment.apiUrlRoot+"/api/clienti",nuovoCliente).subscribe(res=>console.log(res));
  };
}
