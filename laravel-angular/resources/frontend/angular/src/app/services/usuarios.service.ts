import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listarUsuarios() {
    return this.http.get<any>(this.url+'/api/usuarios/meagan60@schmidt.com');
  }
}
