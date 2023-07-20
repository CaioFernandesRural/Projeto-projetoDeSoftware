import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios: any[] = [];
  livros: any[] = [];
  livro: any;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService) { }

  ngOnInit(): void {
    this.listarAnunciosRecentes();
  }

  listarAnunciosRecentes() {
    this.anuncioService.listarAnunciosRecentes().subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
        this.livros = []; // Criar uma matriz para armazenar os livros de cada anúncio
        for (const anuncio of this.anuncios) {
          const idLivroAnuncio = anuncio.idLivro;
          this.carregarLivroPorId(idLivroAnuncio);
        }
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    );
  }

  carregarLivroPorId(idLivro: number) {
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        this.livros.push(livro); // Adicionar o livro à matriz de livros
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }


}

