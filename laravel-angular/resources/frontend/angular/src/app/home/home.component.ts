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
  livro: any;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService) { }

  async ngOnInit(): Promise<void> {
    await this.listarAnunciosRecentes();
  }

  async listarAnunciosRecentes() {
    this.anuncioService.listarAnunciosRecentes().subscribe(
      async (anuncios: any) => {
        this.anuncios = anuncios;
        for(const anuncio of this.anuncios) {
          const idLivroAnuncio = anuncio.idLivro;
          await this.carregarLivroPorId(idLivroAnuncio);
        }
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
  }

  async carregarLivroPorId(idLivro: number) {
    console.log(idLivro)
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        console.log(livro)
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    )
  }

}

