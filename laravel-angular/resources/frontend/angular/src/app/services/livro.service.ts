import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  registrarLivro(livroData: any) {
    return this.http.post(environment.apiUrl+'/api/register', livroData);
  }

  listarLivros() {
    return this.http.get(environment.apiUrl+'/api/todosLivros');
  }

  cincoRecentes() {
    return this.http.get(environment.apiUrl+'/api/cincoRecentes');
  }
}
