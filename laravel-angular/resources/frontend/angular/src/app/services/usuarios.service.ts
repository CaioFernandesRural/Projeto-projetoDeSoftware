import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  isAuthenticated: Boolean = false;

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(environment.apiUrl+'/api/register', userData);
  }

  login(userData: any) {
    return this.http.post(environment.apiUrl+'/api/login/', userData);
  }

  isAuthenticatedFunction() {
    const token = localStorage.getItem('token');
    if(token) {
      return this.isAuthenticated = true;
    } else {
      return this.isAuthenticated = false;
    }
  }

  usuarioPorId(idUser: any) {
    return this.http.get(`${environment.apiUrl}/api/usuarioPorId/${idUser}`);
  }
}
