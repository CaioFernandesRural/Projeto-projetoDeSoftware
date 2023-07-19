import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../services/anuncio.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit{

  anuncios: any[] = [];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    
  }

  listarAnuncios() {
    this.anuncioService.listarAnuncios().subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
  }

}
