import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private http: HttpClient) { }

  registrarAnuncio(anuncioData: any) {
    return this.http.post(environment.apiUrl+'/api/register', anuncioData);
  }
}
