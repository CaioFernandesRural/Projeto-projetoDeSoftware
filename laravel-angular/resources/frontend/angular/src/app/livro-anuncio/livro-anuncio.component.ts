import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livro.service';
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { AnuncioService } from '../services/anuncio.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-livro-anuncio',
  templateUrl: './livro-anuncio.component.html',
  styleUrls: ['./livro-anuncio.component.css']
})
export class LivroAnuncioComponent implements OnInit {

  token: any;
  userData: any;
  email: any;
  nome: any;
  cidade: any;
  estado: any;
  bio: any;
  telefone: any;
  id: any;
  anuncio: any;
  livro: any;
  user: any;

  constructor(private anuncioService: AnuncioService, private route: ActivatedRoute, private livroService: LivroService, private usuarioService: UsuariosService) { }

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

    this.route.paramMap.subscribe(params => {
      const idAnuncio = params.get('idAnuncio');
      this.carregarAnuncioPorId(idAnuncio);
    });
  }
  
  carregarAnuncioPorId(idAnuncio: any) {
    this.anuncioService.anuncioPorId(idAnuncio).subscribe(
      (anuncio: any) => {
        this.anuncio = anuncio;
        const anuncioSelecionado = anuncio[0];
        const idLivroAnuncio = anuncioSelecionado.idLivro;
        const idUserAnunciante = anuncioSelecionado.idDono;
        this.carregarLivroPorId(idLivroAnuncio);
        this.carregarUsuarioPorId(idUserAnunciante);
      }
    )
  }

  carregarLivroPorId(idLivro: number) {
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        this.livro = livro;
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }

  carregarUsuarioPorId(idUser: number) {
    this.usuarioService.usuarioPorId(idUser).subscribe(
      (user: any) => {
        this.user = user[0];
      },
      (error) => {
        console.error('Erro ao buscar usuário:', error);
      }
    )
  }

}
