import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(environment.apiUrl+'/api/register', userData);
  }

  login(userData: any) {
    return this.http.post(environment.apiUrl+'/api/login/', userData);
  }
}
