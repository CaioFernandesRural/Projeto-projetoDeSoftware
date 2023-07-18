import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnuncioService } from '../services/anuncio.service';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css']
})
export class CadastroAnuncioComponent implements OnInit {

  registerForm!: FormGroup;
  livros: any[] = [];
  livroSelecionado: any;
  anuncioData: any;

  constructor(private livroService: LivroService, private formBuilder: FormBuilder, private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.listarLivrosCadastrados();
  }

  listarLivrosCadastrados() {
    this.livroService.listarLivros().subscribe(
      (livros: any) => {
        this.livros = livros;
      },
      (error) => {
        console.error('Erro ao listar os livros cadastrados:', error);
      }
    );
  }

onChangeLivro(event: any) {
  this.livroSelecionado = this.livros.find(livro => livro.titulo === event.target.value);
}

submit() {
  
}
}
