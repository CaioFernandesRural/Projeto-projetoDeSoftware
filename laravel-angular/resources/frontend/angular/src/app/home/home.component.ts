import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AnuncioService } from '../services/anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: any;
  userData: any;
  anuncios: any[] = [];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.listarAnunciosRecentes();
  }

  listarAnunciosRecentes() {
    this.anuncioService.listarAnunciosRecentes().subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
  }

}

