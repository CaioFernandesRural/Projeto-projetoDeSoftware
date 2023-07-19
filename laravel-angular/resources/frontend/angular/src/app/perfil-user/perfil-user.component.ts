import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AnuncioService } from '../services/anuncio.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {
  
  token: any;
  userData: any;
  email: any;
  nome: any;
  cidade: any;
  estado: any;
  bio: any;
  telefone: any;
  id: any;
  anuncios: any[] = [];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    this.nome = this.userData.nome;
    this.cidade = this.userData.cidade;
    this.estado = this.userData.estado;
    this.bio = this.userData.bio;
    this.telefone = this.userData.telefone;
    this.id = this.userData.user_id;
    this.listarAnunciosUser();
  }

  listarAnunciosUser() {
    this.anuncioService.listarAnunciosDono().subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
  }

}
