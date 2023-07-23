import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from '../services/usuarios.service';

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
  fotoPerfil: any;
  anuncios: any[] = [];
  livros: any[] = [];
  fotoPerfilUrl: string | undefined;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService, private usuarioService: UsuariosService) { }

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
    this.fotoPerfil = this.userData.fotoPerfil;
    this.listarAnunciosUser(this.id);
    this.usuarioService.getFotoPerfil(this.fotoPerfil).subscribe(
      (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.fotoPerfilUrl = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      },
      (error) => {
        console.log('Erro ao obter a imagem de perfil:', error);
      }
    );
  }

  listarAnunciosUser(idDono: number) {
    this.anuncioService.listarAnunciosDono(idDono).subscribe(
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
    )
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
