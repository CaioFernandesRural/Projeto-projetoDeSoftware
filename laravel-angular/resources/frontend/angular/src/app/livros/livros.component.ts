import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit{

  anuncios: any[] = [];
  livros: any[] = [];
  livro: any;
  user: any;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService, private router: Router, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.listarAnuncios();
  }

  listarAnuncios() {
    this.anuncioService.listarAnuncios().subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
        this.livros = []; // Criar uma matriz para armazenar os livros de cada anúncio
        for (const anuncio of this.anuncios) {
          const idLivroAnuncio = anuncio.idLivro;
          const idUserAnunciante = anuncio.idDono;
          this.carregarLivroPorId(idLivroAnuncio, anuncio);
          this.carregarUsuarioPorId(idUserAnunciante);
        }
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
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

  carregarUsuarioPorId(idUser: number) {
    this.usuarioService.usuarioPorId(idUser).subscribe(
      (user: any) => {
        for(var i = 0; i < user.length; i++) {
          this.user = user[i];
        }
      },
      (error) => {
        console.error('Erro ao buscar usuário:', error);
      }
    )
  }

  verAnuncio(idAnuncio: number) {
    this.router.navigate(['/livro-anuncio', idAnuncio]);
  }

}
