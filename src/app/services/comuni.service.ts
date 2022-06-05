import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ComuniService {

  apiUrlRoot: string;

  constructor(private http: HttpClient) {
    this.apiUrlRoot = environment.apiUrlRoot;
  }

  GetAll(p: number) {
    return this.http.get<any>(this.apiUrlRoot + 'api/comuni?page=' + p + '&size=20&sort=id,ASC');
  }
}

