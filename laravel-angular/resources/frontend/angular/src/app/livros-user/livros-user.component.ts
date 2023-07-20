import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-user',
  templateUrl: './livros-user.component.html',
  styleUrls: ['./livros-user.component.css']
})
export class LivrosUserComponent implements OnInit {

  anuncios: any[] = [];
  livros: any[] = [];
  token: any;
  userData: any;
  id: any;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.id = this.userData.user_id;
    this.listarAnunciosUser(this.id);
  }

  listarAnunciosUser(idDono: number) {
    this.anuncioService.listarAnunciosDono(idDono).subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
        this.livros = []; 
        for (const anuncio of this.anuncios) {
          const idLivroAnuncio = anuncio.idLivro;
          this.carregarLivroPorId(idLivroAnuncio, anuncio);
        }
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    );
  }

  carregarLivroPorId(idLivro: number, anuncio: any) {
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        this.livros.push({ anuncio, livro }); // Store the 'anuncio' and 'livro' together in the array
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }

  verAnuncio(idAnuncio: number) {
    this.router.navigate(['/livro-anuncio', idAnuncio]);
  }

}